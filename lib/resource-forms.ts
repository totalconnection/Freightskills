// Add only values copied from the owner's resource-specific ActiveCampaign form.
// Public form actions/hidden fields are not API credentials. Never add an API key here.
import type { ResourceSlug } from './resource-landing';
export type ResourceForm = {
  action: string;
  hiddenFields: Record<string, string>;
  verified: boolean;
};
export const resourceForms: Partial<Record<ResourceSlug, ResourceForm>> = {
  "drayage-checklist": {
    "action": "https://freightskills.activehosted.com/proc.php",
    "hiddenFields": {
      "u": "1",
      "f": "1",
      "s": "",
      "c": "0",
      "m": "0",
      "act": "sub",
      "v": "2",
      "or": "88d54701-78c5-4c1a-b115-6d1833b491e4"
    },
    "verified": true
  },
  "sales-road-map": {
    "action": "https://freightskills.activehosted.com/proc.php",
    "hiddenFields": {
      "u": "3",
      "f": "3",
      "s": "",
      "c": "0",
      "m": "0",
      "act": "sub",
      "v": "2",
      "or": "938ee0f6-0406-423d-a4d6-fd11afbc32cf"
    },
    "verified": true
  },
  "customer-research-guide": {
    "action": "https://freightskills.activehosted.com/proc.php",
    "hiddenFields": {
      "u": "4",
      "f": "4",
      "s": "",
      "c": "0",
      "m": "0",
      "act": "sub",
      "v": "2",
      "or": "049a0b60-0dbc-4f7b-9541-78639102a3d0",
      "field[7]": "no"
    },
    "verified": true
  },
  "niche-resource": {
    "action": "https://freightskills.activehosted.com/proc.php",
    "hiddenFields": {
      "u": "5",
      "f": "5",
      "s": "",
      "c": "0",
      "m": "0",
      "act": "sub",
      "v": "2",
      "or": "990c3ef9-8a2c-41ae-a1df-d0b5105259b2",
      "field[7]": "no"
    },
    "verified": true
  },
  "onboarding-guide": {
    "action": "https://freightskills.activehosted.com/proc.php",
    "hiddenFields": {
      "u": "6",
      "f": "6",
      "s": "",
      "c": "0",
      "m": "0",
      "act": "sub",
      "v": "2",
      "or": "eea76d4f-76b9-4eea-b2d2-ccfe4c95c9b7",
      "field[7]": "no"
    },
    "verified": true
  }
};
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
