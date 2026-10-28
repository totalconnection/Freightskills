# Free training registration

Routes: `/webinar-register` → `POST /api/training-registrations` → `/webinar-confirmation` → `/webinar-watch`.

The 2023 Vimeo recording is live. Registration is approved and crawlable; confirmation and watch remain noindex. The video ID and unlisted hash are configured in `content/webinar.json`; replace those together for a future recording. The player loads Vimeo only after a visitor clicks play.

ActiveCampaign assets created October 28, 2026:
- List 5: Freightskills Free Training. Separate from resource list 4 and its welcome/nurture automations.
- Form 7: Freightskills | Free Training. Single opt-in, subscribes only to list 5, redirects to the site's confirmation page, does not overwrite blank fields.
- Automation 13: Freightskills | Free Training confirmation. Trigger 26 is form 7, once per contact. No historical contacts enrolled.
- Live message 22 / campaign 16: one confirmation and training-page link email from Luis Uribe <luis@freightskills.com>. Message 21 / campaign 15 remain the original draft. Source copy: `content/free-training-email.txt`.
- Automation 13 is active (status 1), send block 43 points to campaign 16, and trigger 26 runs once per contact for form 7.

The server persists registrations in the existing `resource_requests` table with resource `free-training`, disclosure `free-training-v1`, consent source `training-link-request`, and marketing consent false. No additional database migration is needed. The form does not modify existing marketing-permission fields or enroll contacts in nurture. Empty first names are omitted from the upstream payload to preserve an existing name.

Same-origin validation, a 6 KB body limit, server-side field validation, honeypot, the shared Cloudflare rate limiter and persisted request IDs protect the endpoint. The user stays on the form on upstream failure and can retry with the same request ID. A completed ID does not repost. A 60-second claim prevents concurrent submissions. An upstream timeout after acceptance can still cause a replay; the once-per-contact automation trigger prevents duplicate delivery. `activecampaign_synced_at` means form acceptance, not inbox delivery. Failed rows require retry or operator recovery; no background retry job is claimed.

Checks: `node scripts/check-training.mjs`, `node scripts/check-activecampaign.mjs`, `npx tsc --noEmit`, `SITE_LAUNCH_APPROVED=true npm run build`, `node scripts/check-seo.mjs http://127.0.0.1:4185`.

Production verified October 28, 2026: commit e6ed1e8 deployed successfully in GitHub Actions run 40743720185. Owner test registration reached the confirmation page and its watch-page link worked. ActiveCampaign contact 1 joined only the new training list for this flow; automation run 18 completed and send log 16 reports successful=1 for message 22 / campaign 16. This verifies send acceptance, not inbox placement. Initial tests exposed an empty redirect because form submit was set to `redirect`; corrected in the ActiveCampaign builder to `open-url` and retried successfully. Repeated diagnostic submissions did not create a second automation run. No nurture sequence is part of this change.

## Recording published October 28, 2026

Commit 7c87341 deployed successfully in GitHub Actions run 40750632466. Vimeo 826552558 (unlisted hash 9d23dd28f5) plays on the live watch page with captions available. Transcript source: owner-provided Vimeo English automatic captions, saved in the project outputs/free-training directory. Duration 52:46; rounded to 53 minutes in copy. Registration and email cover positioning, selling strategies to shippers, and focused business-building activities. The watch page links the Academy and labels the recording as 2023 because examples and offers are historical.

Updated live campaign 16 / message 22 through the automation message HTML editor; Finish saved successfully. Verified HTML and regenerated plain text via the connector, rendered preview including sender and unsubscribe footer, and active automation/campaign status 1. No new email was sent during this update; prior end-to-end registration/send acceptance remains documented above. The generic campaign edit tool cannot edit automation emails; the message update tool changed preheader but ignored body, so use the actual automation message editor for body updates.

Validation: build, TypeScript, training integration checks, and SEO checks (97 routes) passed. Live Vimeo playback verified in Chrome. Stable /webinar-watch URL allows replacing the recording without changing already-delivered email links. Source email HTML and readable copy are saved in content/free-training-email.html and .txt.

## Focused watch page

Owner requested a distraction-free viewing page. Shared navigation, footer, personal attribution, lesson summaries and sales content are removed on /webinar-watch. Optional analytics/privacy UI is not mounted on this route; Vimeo remains click-to-load with dnt=1. The header currently contains the approved logo; consultation booking destination is pending owner input. Video scales to available viewport height and width. The initial email links directly to Academy for current offer details because the watch-page promotion was removed.
