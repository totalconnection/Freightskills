# Freightskills

Marketing website and five free resource downloads. Source is maintained in GitHub; the prepared production target is a Cloudflare Worker with D1 storage.

## Development and deployment

Use Node >=22.13. Run `npm ci`, `npm run dev`, or `SITE_LAUNCH_APPROVED=true npm run build`.

Deploy the built Worker using `npx wrangler deploy --config dist/server/wrangler.json`. `wrangler.jsonc` binds the Freightskills leads database. Initialize its schema with the SQL migrations in `drizzle/` before accepting submissions. Never commit credentials or lead exports.

Production needs `SITE_LAUNCH_APPROVED=true` at build time and runtime. This enables indexing and publishes only approved editorial articles. Canonicals use `https://freightskills.com`; the middleware redirects www to the apex while preserving the URL path and query.

## Resource delivery

The five pages are `/drayage-checklist`, `/sales-road-map`, `/customer-research-guide`, `/niche-resource`, and `/onboarding-guide`. Their original PDFs and covers are under `public/`, with checksums in `content/resource-files.json`.

Forms validate and save requests to D1, then redirect to the matching thank-you page with a download and an optional free Skool invitation. US visitors see the marketing disclosure without a checkbox; other visitors have an optional marketing checkbox. Consent source and disclosure version are stored with the request.

**Integration status:** ActiveCampaign forms have been prepared in the account, but this commit's resource endpoint does not yet forward requests to ActiveCampaign. Email automation must be connected and tested before declaring the email delivery launch complete.

## Search visibility

Run `npm run check:seo -- https://freightskills.com` after deployment (or supply the local production preview URL). The check verifies every sitemap page returns HTTP 200, server-rendered headings, titles, indexable metadata and correct canonicals; all five resource pages must appear. Thank-you pages must remain noindex and outside the sitemap. Robots must advertise the sitemap and permit crawling.

The local production build passed these checks for 23 public pages on October 26, 2026. Live-domain verification is still required after cutover. Search engines decide when to index pages.

## Editorial and commerce scope

Articles derived from video transcripts are published only when their content record is approved. Draft source content is not approval. The webinar registration and workshop checkout remain explicitly labeled previews; payment, portal provisioning, and webinar registration integrations are separate unfinished work. The existing student portal link remains available.

The brand uses the one-word Freightskills logo and navy, teal, mint and warm-white palette. Brand assets are in `public/brand/` and application tokens in `app/brand-tokens.css`.
