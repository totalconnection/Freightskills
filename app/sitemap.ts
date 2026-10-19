import { isProduction, siteUrl } from '@/lib/config';
import { topics } from '@/lib/topics';
import { posts } from '@/lib/posts';
import { resources } from '@/lib/resources';
export default function sitemap() {
  if (!isProduction) return [];
  return [
    '',
    '/about',
    '/learn',
    '/blog',
    '/resources',
    '/community',
    ...topics.map((t) => `/learn/${t.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
    ...resources.map((r) => `/${r.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
