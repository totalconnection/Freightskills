# Editing and publishing Freightskills articles

The authoritative source is the totalconnection/Freightskills GitHub repository. This implementation is on redesign/public-library. The public website is separate from the course and student portal.

## Edit an article

Each launch article is a readable JSON file in content/articles. Edit its title, excerpt, topic, sections, sources, and related slugs. Keep original source video ID/title and source-register ID. Add new article imports to lib/posts.ts. Paragraphs are rendered as text, not executable HTML. A section has a stable id, a heading, paragraphs, and optional bullets. Reading time is calculated from the text. Search and topic lists use the same data.

All launch articles are `approved: false`. They are visible in the local preview, with an editorial draft label. They are excluded from a production build until explicitly approved. Review notes appear only in preview. Preserve the two older article paths; their older drafts also require review.

## Editorial review

1. Read the source video transcript; retain its argument, concrete detail, and examples. Do not invent quotations or personal experience.
2. Merge genuinely overlapping sources into the existing article rather than starting another URL targeting the same question.
3. Verify current regulatory, classification, credential, product, and fee claims using primary sources. Keep citations next to the relevant discussion or in the source list. Record substantive changes in reviewNotes and docs/EDITORIAL-REVIEW.md.
4. Review against the user's no-competitor-content rule. No quizzes, worksheets, sales offers, or tentative program claims.
5. Have Luis review the article and substantive corrections. Remove preview-oriented wording from the article body only after the proposed changes are approved. Set approved true only after that review.
6. Verify image, source link, related articles, topic, title, description, and canonical. Do not invent publication or update dates. Video schema is omitted until upload dates and thumbnails are verified.
7. Check the production build before launch. Production requires a separate explicit approval of the complete site.

## Preview versus production

Default is staging: robots metadata is noindex/nofollow on every page, the sitemap is empty, and robots.txt permits crawling so crawlers can read noindex. Keep the review server local or hosted behind owner-only access. A robots disallow is not a substitute for authentication or noindex.

SITE_LAUNCH_APPROVED=true enables production indexing and filters articles to only approved entries. Do not set it before the owner approves launch. STUDENT_PORTAL_URL is an optional verified external destination; when unset, the header shows YouTube rather than a fake login link. Program/portal code is not included here.

Current resource detail pages link to the existing live resources only in preview. Production must restore the existing download/form behavior at each preserved URL before launch; never ship a self-link or the temporary access message. Contract templates and student-only resources were not moved or copied into the public site.
