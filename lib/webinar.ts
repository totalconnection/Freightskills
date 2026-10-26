import content from '@/content/webinar.json';

type Registration = {
  action: string;
  hiddenFields: Record<string, string>;
  privacyUrl: string;
  consentText: string;
  verified: boolean;
};
type Webinar = Omit<typeof content, 'registration'> & {
  registration: Registration | null;
};
export const webinar: Webinar = content;

// Use only public fields copied from the owner's verified webinar form.
// API credentials never belong in this content or in the rendered form.
export function getWebinarRegistration(): Registration | null {
  const form = webinar.registration;
  if (!form?.verified || !form.consentText?.trim()) return null;
  try {
    const action = new URL(form.action);
    const privacy = new URL(form.privacyUrl);
    if (
      action.protocol !== 'https:' ||
      !action.hostname.endsWith('.activehosted.com') ||
      action.pathname !== '/proc.php' ||
      privacy.protocol !== 'https:' ||
      !form.hiddenFields?.f ||
      !form.hiddenFields?.u
    )
      return null;
    return form;
  } catch {
    return null;
  }
}
