// Public measurement identifier, never an API secret. Set after account setup.
export const measurementId = 'G-WHJ8GS37DV';
export const consentKey = 'fs-privacy-v1';
export const consentLifetime = 180 * 86400000;
type Consent = { analytics: boolean; savedAt: number; version: 1 };
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }
export function privacySignal() { return typeof navigator !== 'undefined' && (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true; }
export function readConsent(): Consent | null {
 try { const c=JSON.parse(localStorage.getItem(consentKey)||'null'); return c?.version===1 && typeof c.analytics==='boolean' && Number.isFinite(c.savedAt) && c.savedAt<=Date.now() && Date.now()-c.savedAt<consentLifetime ? c : null; } catch {return null;}
}
export function analyticsAllowed() {return !privacySignal() && readConsent()?.analytics===true;}
export async function trackResource(resource: string) {
 if(!analyticsAllowed() || !window.gtag || !['drayage-checklist','sales-road-map','customer-research-guide','niche-resource','onboarding-guide'].includes(resource))return;
 await new Promise<void>(resolve=>{const timer=setTimeout(resolve,700);window.gtag!('event','generate_lead',{resource,method:'resource_form',transport_type:'beacon',event_callback:()=>{clearTimeout(timer);resolve();},event_timeout:600});});
}

export function safeAnalyticsPath(path:string){
 if(/^\/(?:$|about$|privacy$|terms$|cookies$|data-retention$|purchase-terms$|trainings$|resources$|community$|videos$|blog$|learn$|quote-mastery$|drayage-mastery$|webinar-register$|checkout$|(?:thank-you\/)?(?:drayage-checklist|sales-road-map|customer-research-guide|niche-resource|onboarding-guide)$)/.test(path))return path;
 if(/^\/(?:blog|learn)\/[a-z0-9-]+$/.test(path) && path.length<160)return path;
 return '/other';
}
