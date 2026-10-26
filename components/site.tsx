import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
    <header className="header">
      <div className="wrap nav">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/trainings">Trainings</Link>
          <Link href="/learn">Lesson library</Link>
          <Link href="/resources">Free resources</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Luis</Link>
        </nav>
        {portalUrl ? (
          <a className="nav-utility" href={portalUrl}>
            Student login <ArrowUpRight size={15} />
          </a>
        ) : (
          <a
            className="nav-utility"
            href="https://www.youtube.com/@freightskills"
          >
            Watch on YouTube <ArrowUpRight size={15} />
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
    <footer className="footer">
      <div className="wrap footer-top">
        <div>
          <Logo />
          <p>
            Practical training to help freight businesses improve sales,
            operations and the way they use modern tools.
          </p>
        </div>
        <div>
          <span className="eyebrow">Learn with Freightskills</span>
          <Link href="/trainings">Workshops & trainings</Link>
          <Link href={freeTrainingUrl}>Free webinar</Link>
          <Link href="/learn">Explore topics</Link>
          <Link href="/blog">All articles</Link>
          <Link href="/videos">All videos</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <div>
          <span className="eyebrow">Stay connected</span>
          <Link href="/about">About Luis</Link>
          <Link href="/community">Community</Link>
          <a href="https://www.youtube.com/@freightskills">YouTube ↗</a>
          {portalUrl && <a href={portalUrl}>Student login ↗</a>}
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Freightskills.</span>
        <span>Freight business training</span>
      </div>
    </footer>
  );
}
