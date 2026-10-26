import fs from 'node:fs';
const paths = fs
  .readdirSync('content/articles')
  .filter((f) => f.endsWith('.json'));
const items = paths.map((f) =>
  JSON.parse(fs.readFileSync('content/articles/' + f, 'utf8')),
);
const slugs = new Set(items.map((p) => p.slug));
for (const p of items) {
  if (p.videos.length !== 1 || p.videos[0].sourceId !== p.sourceId || p.videos[0].id !== p.videoId)
    throw Error('Article must map to exactly one matching video: ' + p.slug);
  if (!p.hero?.startsWith('/images/articles/') || !fs.existsSync('public' + p.hero) || !p.heroAlt)
    throw Error('Missing hero image or description: ' + p.slug);
  if (!p.publishedAt || !p.takeaway || !p.searchIntent.endsWith('?'))
    throw Error('Missing publication date or answer structure: ' + p.slug);
  if (!p.title || !p.excerpt || !p.sourceId || !/^[-\w]{11}$/.test(p.videoId))
    throw Error('Missing source or metadata: ' + p.slug);
  if (new Set(p.sections.map((s) => s.id)).size !== p.sections.length)
    throw Error('Duplicate heading anchor: ' + p.slug);
  for (const r of p.related)
    if (!slugs.has(r)) throw Error('Broken related article: ' + r);
  for (const s of p.sources)
    if (!s.url.startsWith('https://')) throw Error('Invalid source URL');
  console.log(
    p.slug,
    p.sections.reduce(
      (n, s) => n + s.paragraphs.join(' ').split(/\s+/).length,
      0,
    ) + ' words',
    p.approved ? 'approved' : 'draft',
  );
}
console.log('Article sources, metadata, anchors, and related links validated.');
const videos = JSON.parse(fs.readFileSync('content/videos.json', 'utf8'));
const covered = new Map();
for (const p of items) {
  if (!p.searchIntent || !p.seoTitle || !p.videos?.length)
    throw Error('Missing SEO intent or videos: ' + p.slug);
  if (p.related.includes(p.slug))
    throw Error('Self-related article: ' + p.slug);
  for (const v of p.videos) {
    if (covered.has(v.sourceId))
      throw Error('Video mapped to competing articles: ' + v.sourceId);
    const original = videos.find((x) => x.sourceId === v.sourceId);
    if (
      !original ||
      original.id !== v.id ||
      original.url !== v.url ||
      original.articleSlug !== p.slug
    )
      throw Error('Video mapping mismatch: ' + v.sourceId);
    covered.set(v.sourceId, p.slug);
  }
}
for (const key of ['slug', 'seoTitle', 'excerpt', 'searchIntent']) {
  if (new Set(items.map((p) => p[key])).size !== items.length)
    throw Error('Duplicate ' + key);
}
if (
  covered.size !== videos.length ||
  new Set(videos.map((v) => v.id)).size !== videos.length
)
  throw Error('Video coverage incomplete or duplicated');
console.log(
  `${videos.length} unique source videos covered by ${items.length} distinct article URLs.`,
);
