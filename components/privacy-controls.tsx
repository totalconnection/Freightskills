 'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import {measurementId,consentKey,consentLifetime,readConsent,privacySignal,analyticsAllowed,safeAnalyticsPath} from '@/lib/analytics';
function clearAnalyticsCookies(){
 for(const part of document.cookie.split(';')){const name=part.trim().split('=')[0];if(!/^_ga(?:_|$)/.test(name))continue;for(const domain of ['',location.hostname,'.'+location.hostname,'.freightskills.com'])document.cookie=`${name}=; Max-Age=0; Path=/; SameSite=Lax${domain?'; Domain='+domain:''}`;}
}
function gtagSetup(){
 window.dataLayer=window.dataLayer||[];
 // Google's command queue expects an Arguments object, not a nested array.
 window.gtag=window.gtag||function(){window.dataLayer!.push(arguments);};
}
export function CookieSettingsButton(){return <button type="button" className="cookie-settings-link" onClick={()=>window.dispatchEvent(new Event('fs-open-privacy'))}>Cookie settings</button>;}
export function PrivacyControls(){
 const [open,setOpen]=useState(false),[allowed,setAllowed]=useState(false),[signal,setSignal]=useState(false),[status,setStatus]=useState('');const pathname=usePathname();
 useEffect(()=>{const sync=()=>{setSignal(privacySignal());setAllowed(analyticsAllowed());if(!readConsent())setOpen(true);};const show=()=>{sync();setOpen(true);};sync();window.addEventListener('fs-open-privacy',show);window.addEventListener('storage',sync);return()=>{window.removeEventListener('fs-open-privacy',show);window.removeEventListener('storage',sync);};},[]);
 useEffect(()=>{if(!measurementId)return;
 if(!allowed || !analyticsAllowed()){
  (window as unknown as Record<string,unknown>)['ga-disable-'+measurementId]=true;
  window.gtag?.('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});clearAnalyticsCookies();return;
 }
 (window as unknown as Record<string,unknown>)['ga-disable-'+measurementId]=false;
 gtagSetup();window.gtag!('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 window.gtag!('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 if(!document.getElementById('fs-google-tag')){window.gtag!('js',new Date());const script=document.createElement('script');script.id='fs-google-tag';script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;document.head.appendChild(script);}
 window.gtag!('config',measurementId,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:consentLifetime/1000,cookie_update:false,page_location:location.origin+safeAnalyticsPath(pathname),page_referrer:'',page_title:safeAnalyticsPath(pathname)});
 window.gtag!('event','page_view',{page_location:location.origin+safeAnalyticsPath(pathname),page_referrer:'',page_title:safeAnalyticsPath(pathname)});
 },[allowed,pathname]);
 useEffect(()=>{const click=(e:MouseEvent)=>{if(!analyticsAllowed() || !window.gtag)return;const a=(e.target as Element)?.closest?.('a[href]');if(!a)return;const u=new URL(a.getAttribute('href')||'',location.origin);if(u.origin===location.origin && /^\/downloads\/[a-z-]+\.pdf$/.test(u.pathname))window.gtag('event','file_download',{file_name:u.pathname.split('/').pop(),file_extension:'pdf'});};document.addEventListener('click',click);return()=>document.removeEventListener('click',click);},[]);
 function choose(analytics:boolean){const next=analytics&&!privacySignal();try{localStorage.setItem(consentKey,JSON.stringify({version:1,analytics:next,savedAt:Date.now()}));}catch{setStatus('Your browser could not save this preference. Optional analytics remains off.');setAllowed(false);return;}setAllowed(next);setOpen(false);setStatus(next?'Analytics allowed.':'Optional analytics is off.');if(!next){clearAnalyticsCookies();if(measurementId)(window as unknown as Record<string,unknown>)['ga-disable-'+measurementId]=true;}}
 return <><span className="sr-only" role="status">{status}</span>{open&&<section className="privacy-banner" aria-labelledby="privacy-heading" aria-label="Cookie choices"><div><h2 id="privacy-heading">Your privacy choices</h2><p>We use necessary storage to remember your choices and cart. Optional Google Analytics helps us understand visits and resource requests. It stays off unless you allow it. <a href="/cookies">Cookie policy</a> · <a href="/privacy">Privacy policy</a></p>{signal&&<p>Your browser's Global Privacy Control signal keeps analytics off.</p>}</div><div className="privacy-actions"><button type="button" onClick={()=>choose(false)}>Reject optional</button><button type="button" disabled={signal} onClick={()=>choose(true)}>Allow analytics</button></div></section>}</>;
}
