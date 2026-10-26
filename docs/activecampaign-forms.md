# Resource form integration

The website POST endpoint saves the request to Cloudflare D1, posts to the existing ActiveCampaign public form, checks its JSON acknowledgement, and only then returns the matching website thank-you URL. No API key is required. ActiveCampaign's existing double opt-in remains enabled; form confirmation is separate from permission for marketing.

| Resource | ActiveCampaign form |
| --- | --- |
| drayage-checklist | 1 |
| sales-road-map | 3 |
| customer-research-guide | 4 |
| niche-resource | 5 |
| onboarding-guide | 6 |

Forms use list 4 (Freightskills Resource Requests). Field 7 (`FS_MARKETING_PERMISSION`) carries yes/no from the website disclosure or optional checkbox. Field 8 (`FS_LATEST_RESOURCE`) stores the latest resource slug. Form submission history identifies individual resource requests; future delivery automations should use the specific form trigger, not only the latest-resource field. Nurture must require permission=yes and an active subscription. No delivery or nurture automations are activated by this code change.

D1 stores the consent source, country, disclosure version, and timestamp. `activecampaign_synced_at` records upstream acknowledgement, not email confirmation or inbox delivery. A 60-second claim prevents simultaneous posts. Completed request IDs do not repost. Failed requests remain saved and return a retryable error. There is no background retry job. As with any external write, a lost response after upstream acceptance can cause a repeat submission on retry; configure future sequences to run once per contact per resource.

Migration `0002_yummy_scorpion.sql` must be applied before deployment. It was applied to the production D1 console on October 26, 2026. The console contained no earlier resource requests to backfill at that time.

Validation: `node scripts/check-activecampaign.mjs` exercises payload mappings, upstream failures, consent, phone omission, request validation, and the route's actual SQL against in-memory SQLite. Requires Node 22.13+ and installed dependencies. `npm run build` and `npx tsc --noEmit` validate the application.

Operational check: query rows where `activecampaign_synced_at IS NULL` to find requests needing recovery. Do not place addresses in URLs or logs. Do not change list subscription or double opt-in settings to bypass confirmation.
