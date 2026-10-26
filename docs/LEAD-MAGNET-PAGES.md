# Free-resource landing pages

Updated October 25, 2026. The same three-step form now serves the five preserved URLs:

- /drayage-checklist
- /niche-resource
- /shipper-objections
- /onboarding-guide
- /follow-up-guide

## Current behavior

1. First name and last name, both required. Side by side where space allows.
2. Email address, required and validated before continuing.
3. Phone number, optional. Either leave it blank and finish or use “Skip phone number.”

Back preserves the entries while the form is open. Progress, labels, validation messages, keyboard submission, and focus changes are accessible. Phone numbers allow common international formatting. Narrow phones stack the name fields. Page CTAs jump to the focusable form.

This is an interactive design preview, with ActiveCampaign explicitly deferred by the owner. The final action shows “Preview complete” and states that nothing was submitted or emailed. All entered values are cleared at completion. No form action, network submission, cookies, local/session storage, email enrollment, download fulfillment, or SMS enrollment is implemented. Fields remain disabled until the client handler is attached, so the unhydrated/native form cannot accidentally submit personal details in the URL.

The shared implementation is `components/resource-form.tsx` with `components/resource-form.css`. The resource route keys the form by slug, so switching guides resets the previous form's state. No new library or integration was added.

## Content and publication

The five live reference pages were inspected on October 25, 2026. They use legacy embedded LeadConnector forms. Those embeds were not reused. Existing titles, page copy, routes, canonical URLs, and the current charcoal/cream/orange design are retained. This change does not revise the underlying guides or invent missing downloads. Resource-file matching and content review are separate work before real delivery is enabled.

Publish this update only to the existing owner-private Site. The public freightskills.com domain and its existing forms are not changed. Preview pages retain noindex/nofollow and the public-launch guard.

## Connect delivery later

- Confirm the correct final download for each of the five pages.
- Add the approved email subscription/privacy wording. A phone number alone must not trigger SMS enrollment.
- Inspect the actual ActiveCampaign form or API contract. The existing `lib/resource-forms.ts` registry is not connected to this preview component; populating it alone will not enable submission. Map first name, last name, email, optional phone, resource ID, and supported attribution fields deliberately. Keep credentials server-side.
- Replace the preview completion with the actual verified outcome. Handle provider errors, duplicate/repeated requests, and retry behavior without losing entries or falsely claiming delivery.
- Test contact creation, resource tags, consent handling, the correct email/file, and mobile submission before enabling real collection. Preserve the public-launch gate until delivery and the rest of the launch checklist are ready.

## Validation

- TypeScript and whitespace checks passed.
- All five routes completed the form in the browser with synthetic test details.
- Checked missing names, invalid email, invalid optional phone, an international-format phone, blank-phone completion, explicit phone skipping, preserved Back values, cleared completion values, keyboard Enter, and focus handling.
- Checked the 390px mobile form and all five layouts at 320px without horizontal overflow.
- Existing canonical URLs and noindex/nofollow verified.
- ActiveCampaign and email delivery are intentionally untested and unconnected.
