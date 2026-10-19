// Add only values copied from the owner's resource-specific ActiveCampaign form.
// Public form actions/hidden fields are not API credentials. Never add an API key here.
import type { ResourceSlug } from './resource-landing';
export type ResourceForm = {
  action: string;
  hiddenFields: Record<string, string>;
  verified: boolean;
};
export const resourceForms: Partial<Record<ResourceSlug, ResourceForm>> = {};
export function getResourceForm(slug: ResourceSlug): ResourceForm | null {
  const form = resourceForms[slug];
  if (!form?.verified) return null;
  try {
    const url = new URL(form.action);
    if (
      url.protocol !== 'https:' ||
      !url.hostname.endsWith('.activehosted.com') ||
      url.pathname !== '/proc.php'
    )
      return null;
    if (!form.hiddenFields.f || !form.hiddenFields.u) return null;
    return form;
  } catch {
    return null;
  }
}
