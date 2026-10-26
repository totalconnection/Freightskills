# YouTube article library

Published content prepared 2026-10-26 for freightskills.com/blog.

## Coverage

The public @freightskills channel displays 66 videos. The local transcript archive and content/videos.json contain the same 66-video inventory. Each video now maps to one unique article, with one original YouTube link and one server-rendered privacy-enhanced embed. Existing 38 article slugs are preserved; 28 separate articles were added. The content check rejects missing, duplicate or mismatched mappings.

## Images and presentation

66 Higgsfield images, optimized to WebP (about 4.9 MB total), are committed under public/images/articles. Generation IDs are retained in blog-image-jobs.json. All images were inspected together in a contact sheet; scenes use American conventional tractors. Images are identified as editorial illustrations rather than documentary photographs of Luis or his business. Hero alt text, dimensions and sharing metadata are article-specific. Cards and video players fit a 390px viewport.

## Search and answer structure

Each article includes its own title, description, canonical URL, question and concise answer, source-grounded sections, related reading, author link, publication date, Article and BreadcrumbList structured data, direct YouTube link, and iframe in the initial HTML. All articles appear in the XML sitemap and browseable library. No fabricated video upload dates or claims of guaranteed search/AI placement are used. The existing thank-you pages remain excluded from indexing.

## Editorial treatment

Articles adapt Luis's transcripts. Historical software screens, offers and market commentary are identified as historical where relevant. Unsupported universal percentages and income promises were not reproduced as current facts. Specialist matters are scoped to the actual arrangement. Current FMCSA financial-responsibility and role guidance, NMFTA classification and SCAC information, and IANA interchange information were consulted for the corresponding articles. Original videos remain intact and reflect their recording period.

This publication supersedes the earlier 38-draft grouping documented in LIBRARY-EXPANSION.md. Editorial approval flags represent the publication state for the user's requested blog launch; they do not claim Luis personally line-edited each article.

## Validation and maintenance

- npm run check:content: 66 unique videos / 66 unique article URLs, image existence, metadata, anchors and related links.
- npx tsc --noEmit and production build.
- npm run check:seo -- <origin>: crawl sitemap, verify indexability, rendered headings, canonicals, Article/Breadcrumb schemas, each video/link, and image responses. Also preserve all five resource page checks and thank-you exclusions.
- Browser checks: desktop library, search, article hero, YouTube player and mobile overflow.

For a future video: add its transcript and content/videos.json entry, write a distinct article, add its hero and article-index.ts import, then run the same checks. This is a static library publication, not an automatic future-video ingestion service.
