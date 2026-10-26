// Indexing and editorial publication require separate, deliberate launch settings.
export const isProduction = process.env.SITE_LAUNCH_APPROVED === 'true';
export const siteUrl = 'https://freightskills.com';
export const freeTrainingUrl = '/webinar-register';
export const portalUrl =
  process.env.STUDENT_PORTAL_URL ||
  'https://broker-training-production.up.railway.app/login';
export function metadata(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: 'Freightskills',
      type: 'website' as const,
      images: [
        {
          url: `${siteUrl}/images/freight-terminal.webp`,
          width: 1440,
          height: 810,
          alt: 'Freightskills freight learning library',
        },
      ],
    },
    twitter: { card: 'summary_large_image' as const, title, description },
  };
}
