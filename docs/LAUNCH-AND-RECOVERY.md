# Launch and recovery checklist

Current state: LOCAL REVIEW BUILD ONLY. No live domain, portal, analytics, or production access changed.

## Required before production

- Obtain Luis's approval of desktop/mobile preview and each article; resolve editorial changes.
- Crawl the existing production site successfully; collect statuses, canonical destinations, titles, descriptions, headings, internal/external links, forms, sitemap and robots. Current browser audit was blocked by unavailable browser security-policy verification. Web reader returned a title but no usable homepage content. Do not call this a completed live SEO audit.
- Obtain authorized GA/Search Console access or exports if available. None were present in the inspected repository/materials. No traffic, ranking, or volume claims have been made.
- Reconcile historical source inventory (66 YouTube entries and 33 separate course sources) with the live public channel. Existing transcripts were exported September 7, 2026; exact video dates have not been verified.
- Restore original resource access/form/download behavior at drayage-checklist, niche-resource, onboarding-guide, shipper-objections, and follow-up-guide. The preview links to the existing live site, not replacement files. Verify contract-template access in its existing system.
- Set STUDENT_PORTAL_URL only after the actual separate destination is confirmed. Test login handoff without changing the portal, enrollment, credentials or course system.
- Confirm existing hosting, DNS and domain ownership; retain rollback deployment and DNS records. This code retains the prior Sites integration but does not imply a hosting migration is approved.
- Run npm run check:launch with SITE_LAUNCH_APPROVED=true. Mark approval flags only after real approval, never to make a check pass.
- Test every route, mobile menu, search, empty states, video player, keyboard access, visible focus, text contrast and reading layouts. Run browser accessibility and performance checks when browser access is available. No measured Core Web Vitals are claimed.
- Verify production HTML has correct self-canonicals and indexing directives, no draft banners, and sitemap includes only approved canonical pages. Verify nonexisting routes return 404. Inspect actual deployed headers and generated robots/sitemap.
- Verify all downloads/forms and outbound links. No new lead collection forms were added.
- Preserve existing valuable URLs. Use docs/URL-MAP.csv as a provisional inventory; add measured legacy URLs after the live crawl. No speculative catch-all redirects.
- Obtain final owner publication approval. Deploy immutable tested commit; verify apex/www/HTTPS behavior and production student/resource access.

## Recovery

Record the prelaunch deployment ID, Git SHA, hosting configuration and DNS snapshot. Deploy the redesign as a new version, retaining the old production version. If verification fails, restore the recorded previous version through the hosting provider and revert any explicitly changed routing/DNS. Do not delete the new branch or overwrite portal data. Recheck home, legacy resources, student login and indexing after rollback. Keep article approvals separate from environment approval.

## Current baseline

Source baseline: 95c0a4b (existing marketing preview). Original local checkout was clean and remains untouched. Work was cloned into this project workspace on redesign/public-library with origin pointing to the existing GitHub repository. Production website baseline still needs capture: the prior marketing preview is not assumed to be the live website.
