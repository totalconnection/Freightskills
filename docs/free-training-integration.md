# Free training registration

Routes: `/webinar-register` → `POST /api/training-registrations` → `/webinar-confirmation` → `/webinar-watch`.

The recording is pending. All three pages remain noindex until final content approval; confirmation and watch pages should remain noindex after launch. Registration copy and the initial email explicitly state that the recording is not available yet.

ActiveCampaign assets created October 28, 2026:
- List 5: Freightskills Free Training. Separate from resource list 4 and its welcome/nurture automations.
- Form 7: Freightskills | Free Training. Single opt-in, subscribes only to list 5, redirects to the site's confirmation page, does not overwrite blank fields.
- Automation 13: Freightskills | Free Training confirmation. Trigger 26 is form 7, once per contact. No historical contacts enrolled.
- Live message 22 / campaign 16: one confirmation and training-page link email from Luis Uribe <luis@freightskills.com>. Message 21 / campaign 15 remain the original draft. Source copy: `content/free-training-email.txt`.
- Automation 13 is active (status 1), send block 43 points to campaign 16, and trigger 26 runs once per contact for form 7.

The server persists registrations in the existing `resource_requests` table with resource `free-training`, disclosure `free-training-v1`, consent source `training-link-request`, and marketing consent false. No additional database migration is needed. The form does not modify existing marketing-permission fields or enroll contacts in nurture. Empty first names are omitted from the upstream payload to preserve an existing name.

Same-origin validation, a 6 KB body limit, server-side field validation, honeypot, the shared Cloudflare rate limiter and persisted request IDs protect the endpoint. The user stays on the form on upstream failure and can retry with the same request ID. A completed ID does not repost. A 60-second claim prevents concurrent submissions. An upstream timeout after acceptance can still cause a replay; the once-per-contact automation trigger prevents duplicate delivery. `activecampaign_synced_at` means form acceptance, not inbox delivery. Failed rows require retry or operator recovery; no background retry job is claimed.

Checks: `node scripts/check-training.mjs`, `node scripts/check-activecampaign.mjs`, `npx tsc --noEmit`, `SITE_LAUNCH_APPROVED=true npm run build`, `node scripts/check-seo.mjs http://127.0.0.1:4185`.

Production verified October 28, 2026: commit e6ed1e8 deployed successfully in GitHub Actions run 40743720185. Owner test registration reached the confirmation page and its watch-page link worked. ActiveCampaign contact 1 joined only the new training list for this flow; automation run 18 completed and send log 16 reports successful=1 for message 22 / campaign 16. This verifies send acceptance, not inbox placement. Initial tests exposed an empty redirect because form submit was set to `redirect`; corrected in the ActiveCampaign builder to `open-url` and retried successfully. Repeated diagnostic submissions did not create a second automation run. No nurture sequence is part of this change. Replace temporary wording in registration/confirmation/watch/email together when the video is ready.
