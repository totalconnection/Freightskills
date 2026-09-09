import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/site';
const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
export const metadata: Metadata = {
  title: { default: 'Freightskills | Freight expertise. Technology-powered growth.', template: '%s | Freightskills' },
  description: 'Build freight expertise and learn to use modern technology in real logistics work. Practical lessons, resources and a free community led by Luis Uribe.',
  robots: { index: false, follow: false },
};
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body className={geist.variable}><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
