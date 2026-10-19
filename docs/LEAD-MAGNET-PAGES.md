# Free-resource landing pages

Five existing URLs now have dedicated conversion-focused landing pages:

- /drayage-checklist
- /niche-resource
- /onboarding-guide
- /shipper-objections
- /follow-up-guide

Scope: local preview. Preserve original URLs and the approved navy/white/green visual direction. The page removes the main browsing navigation, explains one specific resource, offers an email-first form (first name optional), includes use guidance and FAQs, and repeats the same CTA. Mobile gets a visible jump to the form. No testimonials, scarcity, download counts, earnings claims or conversion-rate promises have been invented. The niche resource's existing title is retained; no profitability guarantee is added. Blog hero images are unchanged.

## Evidence and limits

Titles, formats and benefits come from the preexisting resource catalog. Live resource URLs could not be fetched by the research tool. No final downloadable files or ActiveCampaign form configuration have been confidently matched to these five public magnets. Separate course materials found locally have not been repurposed as free downloads. The owner has been asked whether newer versions exist.

The resource overview panels are HTML descriptions, not screenshots of a verified downloadable file. Final copy should be checked against the confirmed resource versions before traffic is sent.

## Connect delivery

1. Confirm the final public resource files and the owner's intended delivery flow.
2. Create a separate ActiveCampaign form and delivery automation for each resource. Configure the resource identifier/tag and any double-opt-in behavior there. Keep resource fulfillment separate from any optional marketing subscription unless the approved consent explicitly covers it.
3. Copy the public form action and hidden fields from the actual ActiveCampaign embed into lib/resource-forms.ts. No API key belongs in browser code. The current adapter expects the native ActiveCampaign /proc.php form format on an activehosted.com subdomain, with firstname and email fields; inspect the actual embed before enabling. If another field or script is required, adapt the integration first.
4. Add the approved privacy link and consent copy. Match the confirmation copy to the actual flow. Do not promise immediate delivery if confirmation is required.
5. Test a real submission per resource: correct contact, resource tag, confirmation, correct email/file, repeat requests, invalid email, and mobile/accessibility behavior. Configure provider-side abuse protection. Mark the configuration verified only after that test.
6. Record campaign attribution using supported provider fields once their exact identifiers are known; do not invent field names. Measure successful confirmed requests/delivery rather than treating button clicks as conversions.
7. Replace the launch blocker only after evidence of complete delivery. Public site launch remains separately controlled.

Until configured, inputs and submission are disabled, and a clear design-preview note says no information is collected. No fabricated success state or local storage of leads is used. The live site's existing delivery system has not been changed.

## Validation

TypeScript and production build pass. The local HTTP crawl checked 60 routes and six local image assets with no failures, including all five lead-magnet paths. Staging noindex remains in place. Browser visual/interaction QA remains unavailable under the environment's browser-control policy; HTTP checks do not verify rendered layout. Email delivery is deliberately untested and disabled pending configuration.
