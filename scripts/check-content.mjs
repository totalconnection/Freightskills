import fs from 'node:fs';
const paths = fs
  .readdirSync('content/articles')
  .filter((f) => f.endsWith('.json'));
const items = paths.map((f) =>
  JSON.parse(fs.readFileSync('content/articles/' + f, 'utf8')),
);
const slugs = new Set(items.map((p) => p.slug));
for (const p of items) {
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
