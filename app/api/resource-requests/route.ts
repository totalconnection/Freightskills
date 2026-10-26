import { env } from 'cloudflare:workers';
import { resources } from '@/lib/resources';
import { submitResourceSignup } from '@/lib/activecampaign';
import type { ResourceSlug } from '@/lib/resource-landing';
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
 const consent=country==='US'||body.marketingConsent===true;
 try{
  const db=(env as unknown as {DB:D1Database}).DB;
  if(!db)throw new Error('Storage unavailable');
  await db.prepare('INSERT INTO resource_requests (id,resource,first_name,last_name,email,phone,marketing_consent,country,consent_source,disclosure_version,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING').bind(id,resource.slug,firstname,lastname,email,phone||null,consent?1:0,country,country==='US'?'us-form-disclosure':'optional-checkbox','resource-request-v2',new Date().toISOString()).run();
  const saved=await db.prepare('SELECT resource,first_name,last_name,email,phone,marketing_consent,activecampaign_synced_at FROM resource_requests WHERE id=?').bind(id).first<{resource:string;first_name:string;last_name:string;email:string;phone:string|null;marketing_consent:number;activecampaign_synced_at:string|null}>();
  if(!saved || saved.resource!==resource.slug || saved.email!==email || saved.first_name!==firstname || saved.last_name!==lastname || (saved.phone||'')!==phone || saved.marketing_consent!==(consent?1:0))
   return Response.json({error:'Your details changed. Please try submitting again.'},{status:409,headers});
  if(!saved.activecampaign_synced_at){
   const started=new Date().toISOString();
   const claim=await db.prepare('UPDATE resource_requests SET activecampaign_started_at=?,activecampaign_error=NULL WHERE id=? AND activecampaign_synced_at IS NULL AND (activecampaign_started_at IS NULL OR activecampaign_started_at<?)').bind(started,id,new Date(Date.now()-60000).toISOString()).run();
   if(!claim.meta.changes)return Response.json({error:'Your request is still processing. Please try again in a moment.'},{status:503,headers});
   try{
    await submitResourceSignup({resource:resource.slug as ResourceSlug,firstname,lastname,email,phone,marketingConsent:consent});
    await db.prepare('UPDATE resource_requests SET activecampaign_synced_at=?,activecampaign_started_at=NULL,activecampaign_error=NULL WHERE id=?').bind(new Date().toISOString(),id).run();
   }catch{
    // Keep the request for recovery and allow a retry with the same id.
    // Store no upstream response text: it can contain personal data.
    await db.prepare('UPDATE resource_requests SET activecampaign_started_at=NULL,activecampaign_error=? WHERE id=?').bind('delivery_failed',id).run();
    return Response.json({error:'Your request is saved, but the email connection is temporarily unavailable. Please try again in a moment.'},{status:503,headers});
   }
  }
  return Response.json({thankYouUrl:`/thank-you/${resource.slug}`},{headers});
 }catch{return Response.json({error:'We could not save your request. Please try again in a moment. Your details are still in the form.'},{status:503,headers});}
}
