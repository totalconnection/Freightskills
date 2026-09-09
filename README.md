# Freightskills marketing relaunch

Private review build. Homepage, mission page, free Skool landing page, video journal, three editorial article adaptations, resource index and five legacy resource routes. Education platform, checkout and lead automation are intentionally outside this phase.

## Run

Node >=22.13. `npm install`, `npm run dev`, `npm run build`. The repository uses the generated Sites/Vinext starter. Production build targets a Cloudflare Worker with static assets. `npm run lint` checks source.

## Content

- `lib/posts.ts`: structured editorial posts. Each record includes video ID, original title, transcript source ID, category, reading estimate, takeaway and section content. Add reviewed records to publish through the existing template. Entries in this preview are drafts adapted from owner-supplied YouTube transcripts, not automatically approved publications.
- `lib/resources.ts`: five existing lead-magnet topics and original page URLs. Original routes preserved for continuity. No PDF assets were exposed by the old public site; it used LeadConnector forms. Download promises and old forms are deliberately not carried over while delivery is unconfigured.
- `components/site.tsx`: approved Skool URL and shared conversion links.
- `app/globals.css`: navy/teal/mint/warm-white design tokens and responsive styles.

## Before public relaunch

1. Owner reviews editorial adaptations, credibility copy, community benefits and the vector interpretation of the approved logo. The source portrait is reused from the existing site and displayed in grayscale.
2. Confirm the supplied Skool group is configured as free with suitable onboarding and resource access. No group settings were changed by this build.
3. Supply actual lead-magnet files, review their current accuracy, then connect delivery. Current landing pages honestly direct to Skool for resource availability updates; no email address is collected or fake delivery success shown.
4. When building email automation: use a server-side endpoint with consent disclosure, validation, abuse protection, delivery status and an approved email provider. Tag the selected resource and redirect/show the approved Skool invitation only after a confirmed outcome. Do not use browser storage as a substitute for mailing-list enrollment.
5. Choose the public deployment/domain. Current metadata is intentionally `noindex,nofollow` for private review. Set canonical metadata, robots/sitemap and redirects as part of the domain launch. Preserve these legacy resource paths. Audit other old product URLs before deciding redirects; old paid offers have not been migrated.
6. Review privacy disclosures for embedded YouTube and Skool transitions before public launch. Old legal terms were not copied because this preview has different functionality.

## Video-to-article publishing flow

Video URL + transcript → editorial draft matching `Post` type → fact/source review → owner approval → add to `posts` → build and publish. Preserve the video as primary source; remove filler, stale promotional promises and unsupported claims. Label new examples and updates. No transcription ingestion service or unattended auto-publisher exists in this phase.

## Evidence and editorial choices

Source site reviewed September 8, 2026: `https://freightskills.com/` and its public JS bundle. Resource topics: Drayage Checklist; Profitable Niche List & CRM Template; Carrier Onboarding & Negotiation Guide; Shipper Objection Mastery Guide; Follow-Up Mastery Guide. Legacy copy uses inconsistent experience/audience claims and unverified social proof; this version avoids those numerical claims.

Creator community references: `https://www.skool.com/the-founders-club/about`, `https://www.skool.com/obf/about`, `https://www.skool.com/entrepreneurcollective/about`. Patterns used: clear audience, concrete benefits, transparent free access and a simple joining sequence. No competitor copy, testimonials, member counts or service promises were reused.

Operational status: no payments, email sends, student accounts or external mutations are implemented. Primary conversions open the user-approved Skool URL. The site is ready for visual/content review, not represented as a completed ecommerce backend or course platform.
