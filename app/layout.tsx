import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/site';
import { isProduction, siteUrl } from '@/lib/config';
const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Freightskills | Practical freight brokerage skills',
    template: '%s | Freightskills',
  },
  description: 'Practical freight brokerage lessons from Luis Uribe.',
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
      </body>
    </html>
  );
}
