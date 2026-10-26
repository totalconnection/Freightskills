import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import ts from 'typescript';
const transpile = source => ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const data = source => 'data:text/javascript;base64,'+Buffer.from(transpile(source)).toString('base64');
const formsModule=data(readFileSync('lib/resource-forms.ts','utf8'));
const integrationModule=data(readFileSync('lib/activecampaign.ts','utf8').replace("'./resource-forms'",JSON.stringify(formsModule)));
const {submitResourceSignup}=await import(integrationModule);
const mapping={'drayage-checklist':'1','sales-road-map':'3','customer-research-guide':'4','niche-resource':'5','onboarding-guide':'6'};
const base={firstname:'Integration',lastname:'Test',email:'test@example.invalid',phone:'',marketingConsent:false};
for(const [resource,id] of Object.entries(mapping)){
 await submitResourceSignup({...base,resource},async(url,options)=>{
  assert.equal(url,'https://freightskills.activehosted.com/proc.php?jsonp=true');
  assert.equal(options.method,'POST');
  assert.equal(options.body.get('f'),id);
  assert.equal(options.body.get('field[7]'),'no');
  assert.equal(options.body.get('field[8]'),resource);
  assert.equal(options.body.has('phone'),false);
  return Response.json({action:'show_thank_you',data:{uniqueId:id}});
 });
}
for(const result of [{action:'show_error'},{action:'unknown'},{action:'show_thank_you',data:{uniqueId:'99'}}])
 await assert.rejects(submitResourceSignup({...base,resource:'drayage-checklist'},async()=>Response.json(result)));
await assert.rejects(submitResourceSignup({...base,resource:'drayage-checklist'},async()=>new Response('',{status:500})));
await assert.rejects(submitResourceSignup({...base,resource:'drayage-checklist'},async()=>{throw new Error('network');}));
await submitResourceSignup({...base,resource:'sales-road-map',phone:'+12025550100',marketingConsent:true},async(_,options)=>{
 assert.equal(options.body.get('phone'),'+12025550100');assert.equal(options.body.get('field[7]'),'yes');
 return Response.json({action:'redirect',data:{url:''}});
});
// Exercise the actual route and SQL against SQLite with a mocked upstream.
const sqlite=new DatabaseSync(':memory:');
for(const file of ['0000_fearless_rumiko_fujikawa','0001_needy_agent_zero','0002_yummy_scorpion'])sqlite.exec(readFileSync(`drizzle/${file}.sql`,'utf8'));
const db={prepare(sql){return {bind(...args){return {async run(){return {meta:{changes:sqlite.prepare(sql).run(...args).changes}};},async first(){return sqlite.prepare(sql).get(...args)||null;}};}};}};
const routeSource=readFileSync('app/api/resource-requests/route.ts','utf8')
 .replace("import { env } from 'cloudflare:workers';",'const env=globalThis.__testEnv;')
 .replace("import { resources } from '@/lib/resources';",'const resources='+JSON.stringify(Object.keys(mapping).map(slug=>({slug})))+';')
 .replace("'@/lib/activecampaign'",JSON.stringify(integrationModule));
globalThis.__testEnv={DB:db};
const {POST}=await import(data(routeSource));
const originalFetch=globalThis.fetch;
let calls=0,fail=false;
globalThis.fetch=async(_,options)=>{calls++;if(fail)throw new Error('network');return Response.json({action:'show_thank_you',data:{uniqueId:options.body.get('f')}});};
const body={...base,resource:'drayage-checklist',id:crypto.randomUUID(),website:''};
const request=(value=body,country='CA',origin='https://freightskills.com')=>new Request('https://freightskills.com/api/resource-requests',{method:'POST',headers:{'Content-Type':'application/json','Origin':origin,'cf-ipcountry':country},body:JSON.stringify(value)});
assert.equal((await POST(request())).status,200);
assert.equal((await POST(request())).status,200);assert.equal(calls,1,'successful retries must not submit twice');
assert.equal((await POST(request({...body,email:'changed@example.invalid'}))).status,409);
fail=true;const retry={...body,id:crypto.randomUUID()};
assert.equal((await POST(request(retry))).status,503);
assert.equal(sqlite.prepare('SELECT activecampaign_error FROM resource_requests WHERE id=?').get(retry.id).activecampaign_error,'delivery_failed');
fail=false;assert.equal((await POST(request(retry))).status,200);
const us={...body,id:crypto.randomUUID()};assert.equal((await POST(request(us,'US'))).status,200);
assert.equal(sqlite.prepare('SELECT marketing_consent FROM resource_requests WHERE id=?').get(us.id).marketing_consent,1);
assert.equal((await POST(request({...body,id:crypto.randomUUID(),website:'spam'}))).status,400);
assert.equal((await POST(request(body,'US','https://other.example'))).status,403);
globalThis.fetch=originalFetch;delete globalThis.__testEnv;sqlite.close();
console.log('PASS: all five mappings, consent, phone handling, upstream failures, persistent retry, duplicate prevention, input and origin validation.');
