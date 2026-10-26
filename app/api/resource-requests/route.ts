import { env } from 'cloudflare:workers';
import { resources } from '@/lib/resources';
const headers={'Cache-Control':'no-store'};
export async function POST(request:Request){
 if(request.headers.get('origin') && request.headers.get('origin')!==new URL(request.url).origin)
  return Response.json({error:'Please submit the form from this website.'},{status:403,headers});
 if(!request.headers.get('content-type')?.includes('application/json'))
  return Response.json({error:'Invalid form submission.'},{status:415,headers});
 let body;
 try{const raw=await request.text();if(raw.length>6000)return Response.json({error:'Form submission is too large.'},{status:413,headers});body=JSON.parse(raw);}catch{return Response.json({error:'Invalid form submission.'},{status:400,headers});}
 if(!body || typeof body!=='object')return Response.json({error:'Invalid form submission.'},{status:400,headers});
 const country=request.headers.get('cf-ipcountry') || null;
 const get=(key:string)=>typeof body[key]==='string'?body[key].trim():'';
 const resource=resources.find(r=>r.slug===get('resource'));
 const firstname=get('firstname'),lastname=get('lastname'),email=get('email').toLowerCase(),phone=get('phone'),id=get('id');
 if(!resource || !firstname || !lastname || firstname.length>100 || lastname.length>100 || email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[\da-f-]{36}$/i.test(id) || phone.length>30 || (phone && (!/^\+?[\d\s().-]+$/.test(phone) || phone.replace(/\D/g,'').length<7 || phone.replace(/\D/g,'').length>15)))
  return Response.json({error:'Check your name, email address and optional phone number.'},{status:400,headers});
 if(get('website'))return Response.json({error:'Please try again.'},{status:400,headers});
 try{
  const db=(env as unknown as {DB:D1Database}).DB;
  if(!db)throw new Error('Storage unavailable');
  await db.prepare('INSERT INTO resource_requests (id,resource,first_name,last_name,email,phone,marketing_consent,country,consent_source,disclosure_version,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING').bind(id,resource.slug,firstname,lastname,email,phone||null,(country==='US'||body.marketingConsent===true)?1:0,country,country==='US'?'us-form-disclosure':'optional-checkbox','resource-request-v2',new Date().toISOString()).run();
  return Response.json({thankYouUrl:`/thank-you/${resource.slug}`},{headers});
 }catch{return Response.json({error:'We could not save your request. Please try again in a moment. Your details are still in the form.'},{status:503,headers});}
}
