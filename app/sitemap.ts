import { isProduction, siteUrl } from '@/lib/config';
import { topics } from '@/lib/topics';
import { posts } from '@/lib/posts';
import { resources } from '@/lib/resources';
import { webinar, getWebinarRegistration } from '@/lib/webinar';
export default function sitemap() {
  if (!isProduction) return [];
  return [
    '',
    '/about',
    '/privacy',
    '/terms',
    '/disclosures',
    '/cookies',
    '/data-retention',
    '/purchase-terms',
    '/learn',
    '/trainings',
    '/academy',
    '/quote-mastery',
    '/drayage-mastery',
    '/blog',
    '/videos',
    '/resources',
    '/community',
    ...(webinar.approved && getWebinarRegistration()
      ? ['/webinar-register']
      : []),
    ...topics.map((t) => `/learn/${t.slug}`),
    ...posts.map((p) => `/blog/${p.slug}`),
    ...resources.map((r) => `/${r.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
