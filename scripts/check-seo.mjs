// Verify rendered responses; run against a local production build or the live domain.
import assert from 'node:assert/strict';
const base = process.argv[2] || 'https://freightskills.com';
const canonical = 'https://freightskills.com';
const slugs = ['drayage-checklist', 'sales-road-map', 'customer-research-guide', 'niche-resource', 'onboarding-guide'];
async function read(path) {
  const r = await fetch(new URL(path, base));
  assert.equal(r.status, 200, `${path}: HTTP ${r.status}`);
  assert(!/noindex/i.test(r.headers.get('x-robots-tag') || ''), `${path}: blocked by HTTP header`);
  return r.text();
}
const robots = await read('/robots.txt');
assert.match(robots, /Allow: \/\s/);
assert(!/Disallow:\s*\/\s/.test(robots), 'robots blocks the site');
assert(robots.includes(`${canonical}/sitemap.xml`));
const sitemap = await read('/sitemap.xml');
assert(!sitemap.includes('/thank-you/'));
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => {
  const u = new URL(m[1]); assert.equal(u.origin, canonical); return u.pathname;
});
assert(paths.length > 5, 'sitemap is empty or incomplete');
for (const slug of slugs) assert(paths.includes(`/${slug}`), `${slug}: missing sitemap entry`);
for (const path of paths) {
  const html = await read(path);
  const tags = html.match(/<meta\b[^>]*>/g) || [];
  assert(!tags.some(t => /name="robots"/.test(t) && /noindex/.test(t)), `${path}: noindex`);
  assert.match(html, /<h1\b/, `${path}: missing server-rendered heading`);
  const expected = canonical + (path === '/' ? '' : path);
  assert(html.includes(`rel="canonical" href="${expected}"`), `${path}: wrong canonical`);
  assert.match(html, /<title>[^<]+<\/title>/, `${path}: no title`);
}
for (const slug of slugs) {
  const html = await read(`/thank-you/${slug}`);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
}
console.log(`PASS: ${paths.length} crawlable, server-rendered canonical pages; all five resource pages; robots and sitemap; thank-you pages excluded.`);
