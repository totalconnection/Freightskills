import { MarketingDisclosure } from '@/components/marketing-disclosure';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CookieSettingsButton } from './privacy-controls';
import { MobileNav } from './mobile-nav';
import { portalUrl, freeTrainingUrl } from '@/lib/config';
export const SKOOL_URL = 'https://www.skool.com/freightskills-community-5835';
export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Freightskills home">
      <img
        src="/brand/freightskills-logo.svg"
        alt="Freightskills"
        width="1024"
        height="377"
      />
    </Link>
  );
}
export function Header() {
  return (
    <header className="hm hm-night hm-header">
      <div className="hm-wrap hm-nav">
        <Link href="/" className="hm-logo" aria-label="Freightskills home">
          <img
            src="/brand/freightskills-logo-light.svg"
            alt="Freightskills"
            width="465"
            height="112"
          />
        </Link>
        <nav className="hm-nav-links" aria-label="Main navigation">
          <Link href="/trainings">Trainings</Link>
          <Link href="/learn">Lesson library</Link>
          <Link href="/resources">Free resources</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Luis</Link>
        </nav>
        {portalUrl ? (
          <a className="hm-btn hm-btn--line hm-nav-action" href={portalUrl}>
            Student login
          </a>
        ) : (
          <a
            className="hm-btn hm-btn--line hm-nav-action"
            href="https://www.youtube.com/@freightskills"
          >
            Watch on YouTube
          </a>
        )}
        <MobileNav portalUrl={portalUrl} />
      </div>
    </header>
  );
}
export function CTA({
  children = 'Explore the library',
  external = false,
  className = '',
}: {
  children?: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`button ${className}`}
      href={external ? SKOOL_URL : '/learn'}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function CommunityBand() {
  return (
    <section className="community-band">
      <div className="wrap band-inner">
        <div>
          <Eyebrow>Freightskills on Skool</Eyebrow>
          <h2>Have a freight question?</h2>
          <p>
            Bring it to the Freightskills community. Discuss the lessons and
            connect with other freight professionals.
          </p>
        </div>
        <Link href="/community" className="button light">
          Explore the community <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="hm hm-night hm-footer">
      <div className="hm-wrap hm-footer-mast">
        <Link href="/" className="hm-footer-logo" aria-label="Freightskills home">
          <img
            src="/brand/freightskills-logo-light.svg"
            alt="Freightskills"
            width="465"
            height="112"
            loading="lazy"
          />
        </Link>
        <p className="hm-lead">
          Practical training to help freight businesses improve sales,
          operations and the way they use modern tools.
        </p>
      </div>
      <div className="hm-wrap hm-footer-links">
        <nav aria-label="Learn with Freightskills">
          <p className="hm-footer-label">Learn with Freightskills</p>
          <Link href="/trainings">Workshops & trainings</Link>
          <Link href={freeTrainingUrl}>Free webinar</Link>
          <Link href="/learn">Explore topics</Link>
          <Link href="/blog">All articles</Link>
          <Link href="/videos">All videos</Link>
          <Link href="/resources">Resources</Link>
        </nav>
        <nav aria-label="Stay connected">
          <p className="hm-footer-label">Stay connected</p>
          <Link href="/about">About Luis</Link>
          <Link href="/community">Community</Link>
          <a href="https://www.youtube.com/@freightskills">YouTube</a>
          {portalUrl && <a href={portalUrl}>Student login</a>}
        </nav>
      </div>
      <div className="hm-wrap"><MarketingDisclosure /></div>
      <div className="hm-wrap hm-footer-bottom">
        <span>© {new Date().getFullYear()} Freightskills.</span>
        <nav className="legal-links" aria-label="Policies"><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link><Link href="/cookies">Cookie policy</Link><Link href="/data-retention">Data retention</Link><CookieSettingsButton /></nav>
      </div>
    </footer>
  );
}
