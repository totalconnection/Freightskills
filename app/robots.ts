import { isProduction, siteUrl } from '@/lib/config';
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(isProduction ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
