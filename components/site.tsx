import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { MobileNav } from './mobile-nav';
import { portalUrl } from '@/lib/config';
export const SKOOL_URL = 'https://www.skool.com/freightskills-community-5835';
export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Freightskills home">
      <svg
        width="29"
        height="37"
        viewBox="0 0 82 105"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M55 9 22 28v34l26 15 12-7"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <path
          d="m28 95 32-19V43L35 29l-12 7"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <b>Freight</b>skills<span className="brand-period">.</span>
      </span>
    </Link>
  );
}
export function Header() {
  return (
    <header className="header">
      <div className="wrap nav">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/learn">Learn</Link>
          <Link href="/blog">Articles</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">About</Link>
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
          <Eyebrow>KEEP THE CONVERSATION GOING</Eyebrow>
          <h2>
            Good questions.
            <br />
            Better conversations.
          </h2>
          <p>
            Connect with other freight professionals in the Freightskills
            community.
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
            Practical freight knowledge.
            <br />
            For the work ahead.
          </p>
        </div>
        <div>
          <span className="eyebrow">THE LIBRARY</span>
          <Link href="/learn">Explore topics</Link>
          <Link href="/blog">All articles</Link>
          <Link href="/videos">All videos</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <div>
          <span className="eyebrow">FREIGHTSKILLS</span>
          <Link href="/about">About Luis</Link>
          <Link href="/community">Community</Link>
          <a href="https://www.youtube.com/@freightskills">YouTube ↗</a>
          {portalUrl && <a href={portalUrl}>Student login ↗</a>}
        </div>
        <div className="footer-note">
          Learn the skills.
          <br />
          Understand the freight.
          <ArrowRight size={28} />
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Freightskills.</span>
        <span>Prospecting. Quoting. Carriers. Operations.</span>
      </div>
    </footer>
  );
}
