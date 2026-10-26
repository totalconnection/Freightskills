'use client';
import Link from 'next/link';
import {trackResource} from '@/lib/analytics';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {ArrowLeft,ArrowRight,Check,FileText} from 'lucide-react';
import './resource-form.css';
type Details={firstname:string;lastname:string;email:string;phone:string};
type Errors=Partial<Record<keyof Details,string>>;
const initial:Details={firstname:'',lastname:'',email:'',phone:''};
const steps=['Name','Email','Phone'];
export function ResourceForm({title,action,slug,isUSVisitor=false}:{title:string;action:string;slug:string;isUSVisitor?:boolean}){
 const [step,setStep]=useState(0),[details,setDetails]=useState(initial),[errors,setErrors]=useState<Errors>({}),[ready,setReady]=useState(false),[submitting,setSubmitting]=useState(false),[submitError,setSubmitError]=useState(''),[marketingConsent,setMarketingConsent]=useState(false),[website,setWebsite]=useState('');
 const requestId=useRef('');
 const first=useRef<HTMLInputElement>(null),last=useRef<HTMLInputElement>(null),email=useRef<HTMLInputElement>(null),phone=useRef<HTMLInputElement>(null);
 const refs={firstname:first,lastname:last,email,phone};
 const navigated=useRef(false);
 useEffect(()=>{requestId.current=crypto.randomUUID();setReady(true);},[]);
 useEffect(()=>{if(navigated.current)[first,email,phone][step].current?.focus();},[step]);
 function update(key:keyof Details,value:string){requestId.current=crypto.randomUUID();setDetails(d=>({...d,[key]:value}));setErrors(e=>({...e,[key]:undefined}));setSubmitError('');}
 function validate(current:number):Errors{
  if(current===0)return {...(!details.firstname.trim()&&{firstname:'Enter your first name.'}),...(!details.lastname.trim()&&{lastname:'Enter your last name.'})};
  if(current===1)return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())?{}:{email:'Enter a valid email address, such as you@company.com.'};
  const p=details.phone.trim(),digits=p.replace(/\D/g,'');
  return !p || (/^\+?[\d\s().-]+$/.test(p)&&digits.length>=7&&digits.length<=15)?{}:{phone:'Enter a valid phone number, or skip this step.'};
 }
 function showErrors(e:Errors){setErrors(e);const key=Object.keys(e)[0] as keyof Details|undefined;if(key)refs[key].current?.focus();}
 async function finish(skipPhone=false){
  if(submitting)return;
  const validation={...validate(0),...validate(1),...(!skipPhone?validate(2):{})};
  if(Object.keys(validation).length){if(validation.firstname||validation.lastname)setStep(0);else if(validation.email)setStep(1);showErrors(validation);return;}
  setSubmitting(true);setSubmitError('');
  try{
   const response=await fetch('/api/resource-requests',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...details,phone:skipPhone?'':details.phone,resource:slug,id:requestId.current,marketingConsent,website})});
   const result=await response.json() as {error?:string;thankYouUrl?:string};
   if(response.status===409)requestId.current=crypto.randomUUID();
   if(!response.ok)throw new Error(result.error||'We could not save your request. Please try again.');
   if(result.thankYouUrl!==`/thank-you/${slug}`)throw new Error('Please try again in a moment.');
   await trackResource(slug);
   window.location.assign(result.thankYouUrl);
  }catch(error){setSubmitError(error instanceof Error?error.message:'We could not save your request. Please try again.');setSubmitting(false);}
 }
 function advance(e:FormEvent){e.preventDefault();const validation=validate(step);if(Object.keys(validation).length)return showErrors(validation);navigated.current=true;if(step===2)void finish();else{setErrors({});setStep(s=>s+1);}}
 function field(name:keyof Details,label:string,placeholder:string,autocomplete:string,type='text'){
  return <div className="magnet-field"><label htmlFor={`resource-${name}`}>{label}{name==='phone'&&<span> (optional)</span>}</label><input ref={refs[name]} id={`resource-${name}`} name={name} type={type} autoComplete={autocomplete} placeholder={placeholder} required={name!=='phone'} maxLength={name==='email'?254:name==='phone'?30:100} inputMode={type==='email'?'email':type==='tel'?'tel':'text'} autoCapitalize={name==='email'?'none':undefined} spellCheck={name==='email'?false:undefined} value={details[name]} onChange={e=>update(name,e.target.value)} aria-invalid={!!errors[name]} aria-describedby={errors[name]?`resource-${name}-error`:undefined}/>{errors[name]&&<p id={`resource-${name}-error`} className="magnet-field-error" role="alert">{errors[name]}</p>}</div>;
 }
 return <aside className="magnet-form-card magnet-multistep" id="get-resource" tabIndex={-1} aria-labelledby="resource-form-title"><div className="magnet-form-heading"><span className="magnet-form-icon"><FileText size={20} aria-hidden="true"/></span><p className="eyebrow">YOUR FREE RESOURCE</p></div><h2 id="resource-form-title">Get the {title}.</h2><p className="magnet-form-intro">Three short steps. Phone number optional.</p><ol className="magnet-form-progress" aria-label="Form progress">{steps.map((label,index)=><li key={label} aria-current={index===step?'step':undefined} className={index<step?'is-complete':''}><span className="magnet-step-number">{index<step?<Check size={13} aria-label="Complete"/>:index+1}</span><span>{label}{index===2&&<small>Optional</small>}</span></li>)}</ol><p className="magnet-step-status" aria-live="polite" aria-atomic="true">Step {step+1} of 3 · {steps[step]}{step===2?' (optional)':''}</p><form onSubmit={advance} noValidate aria-describedby="delivery-note" aria-busy={submitting}><fieldset disabled={!ready||submitting} className="magnet-form-fields"><legend className="magnet-step-title">{['Let’s start with your name.','What’s your email address?','Add a phone number?'][step]}</legend>{step===0&&<div className="magnet-name-fields">{field('firstname','First name','First name','given-name')}{field('lastname','Last name','Last name','family-name')}</div>}{step===1&&field('email','Email address','you@company.com','email','email')}{step===2&&<><p className="magnet-phone-hint" id="phone-hint">Your guide will be ready on the next page. A phone number is entirely optional.</p>{field('phone','Phone number','Your phone number','tel','tel')}{!isUSVisitor&&<label className="magnet-optin"><input type="checkbox" name="marketingConsent" checked={marketingConsent} onChange={e=>{requestId.current=crypto.randomUUID();setMarketingConsent(e.target.checked);}}/><span>Yes, I’d like occasional FreightSkills training and resource updates by email. (Optional)</span></label>}</>}<label className="magnet-honeypot" aria-hidden="true">Leave this empty<input name="website" value={website} onChange={e=>setWebsite(e.target.value)} autoComplete="off" tabIndex={-1}/></label><button className="button magnet-submit" type="submit">{submitting?'Preparing your guide…':step===2?action:'Continue'} <ArrowRight size={18} aria-hidden="true"/></button><div className="magnet-form-navigation">{step>0&&<button type="button" className="magnet-back" onClick={()=>{navigated.current=true;setErrors({});setStep(s=>s-1);}}><ArrowLeft size={15} aria-hidden="true"/> Back</button>}{step===2&&<button type="button" className="magnet-skip" onClick={()=>void finish(true)}>Skip phone number</button>}</div></fieldset>{submitError&&<p className="magnet-form-error" role="alert">{submitError}</p>}</form><noscript><p className="magnet-preview-note">Please enable JavaScript to request your resource.</p></noscript><p id="delivery-note" className="magnet-preview-note">{isUSVisitor?'By requesting your guide, you’ll receive it plus FreightSkills training and resource emails. Unsubscribe anytime.':'We save your details with your resource request. Next, you’ll get your PDF download and an optional invitation to our free community.'} <Link href="/privacy">Privacy</Link></p></aside>;
}
