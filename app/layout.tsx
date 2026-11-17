import type { Metadata } from 'next';
import './brand-tokens.css';
import './globals.css';
import './site-refresh.css';
import './trainings.css';
import './checkout.css';
import './brand.css';
import './hallmark.css';
import { PrivacyControls } from '@/components/privacy-controls';
import { Header, Footer } from '@/components/site';
import { SiteFrame } from '@/components/site-frame';
import { isProduction, siteUrl } from '@/lib/config';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {google: 'KHuDqjinWCvTycaU38IRPq0TSsLq1hC_FgaqIA8aYEw'},
  title: {
    default: 'Freightskills | Build a better freight business',
    template: '%s | Freightskills',
  },
  description:
    'Practical training for freight businesses in sales, operations, AI and automation, with Luis Uribe.',
  robots: { index: isProduction, follow: isProduction },
  icons: { icon: '/favicon.svg' },
};
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteFrame header={<Header />} footer={<Footer />} privacy={<PrivacyControls />}>
          {children}
        </SiteFrame>
      </body>
    </html>
  );
}
