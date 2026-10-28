import { getWebinarRegistration } from './webinar';
export async function submitTrainingSignup(
  signup: { firstname: string; email: string },
  send: typeof fetch = fetch,
) {
  const form = getWebinarRegistration();
  if (!form) throw new Error('form_not_configured');
  const body = new URLSearchParams(form.hiddenFields);
  if (signup.firstname) body.set('firstname', signup.firstname);
  body.set('email', signup.email);
  const response = await send(`${form.action}?jsonp=true`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body,
    signal: AbortSignal.timeout(12000),
    redirect: 'manual',
  });
  if (!response.ok) throw new Error(`upstream_http_${response.status}`);
  const result = (await response.json().catch(() => {
    throw new Error('upstream_invalid_json');
  })) as { action?: string; data?: { uniqueId?: string; url?: string } };
  if (
    result.action === 'redirect' &&
    result.data?.url === 'https://freightskills.com/webinar-confirmation'
  )
    return;
  if (
    result.action === 'show_thank_you' &&
    String(result.data?.uniqueId) === form.hiddenFields.f
  )
    return;
  throw new Error('upstream_rejected');
}
