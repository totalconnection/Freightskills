import { getResourceForm } from './resource-forms';
import type { ResourceSlug } from './resource-landing';

export type ResourceSignup = {
 resource: ResourceSlug; firstname: string; lastname: string; email: string;
 phone: string; marketingConsent: boolean;
};

// Use the existing public forms so ActiveCampaign retains its double opt-in
// and form-specific submission history. No API credential enters the browser.
export async function submitResourceSignup(signup: ResourceSignup, send: typeof fetch = fetch) {
 const form = getResourceForm(signup.resource);
 if (!form) throw new Error('form_not_configured');
 const body = new URLSearchParams(form.hiddenFields);
 body.set('firstname', signup.firstname);
 body.set('lastname', signup.lastname);
 body.set('fullname', `${signup.firstname} ${signup.lastname}`);
 body.set('email', signup.email);
 // Omit an empty phone so an existing contact's phone is not cleared.
 if (signup.phone) body.set('phone', signup.phone);
 body.set('field[7]', signup.marketingConsent ? 'yes' : 'no');
 body.set('field[8]', signup.resource);
 const response = await send(`${form.action}?jsonp=true`, {
  method: 'POST', headers: { Accept: 'application/json' }, body,
  signal: AbortSignal.timeout(12000), redirect: 'error',
 });
 if (!response.ok) throw new Error(`upstream_http_${response.status}`);
 const result = await response.json().catch(()=>{throw new Error('upstream_invalid_json');}) as { action?: string; data?: { uniqueId?: string; id?: string; url?: string } };
 // Read the explicit acknowledgement; never execute ActiveCampaign's JS or
// follow its redirect. Our own thank-you route is the only allowed destination.
 if (result.action === 'show_thank_you' && String(result.data?.uniqueId) === form.hiddenFields.f) return;
 if (result.action === 'redirect' && typeof result.data?.url === 'string') return;
 throw new Error('upstream_rejected');
}
