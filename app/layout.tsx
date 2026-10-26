import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './brand-tokens.css';
import './globals.css';
import './site-refresh.css';
import './trainings.css';
import './checkout.css';
import './brand.css';
import { PrivacyControls } from '@/components/privacy-controls';
import { Header, Footer } from '@/components/site';
import { isProduction, siteUrl } from '@/lib/config';
const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
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
      <body className={geist.variable}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <PrivacyControls />
      </body>
    </html>
  );
}
