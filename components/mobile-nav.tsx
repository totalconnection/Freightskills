'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
export function MobileNav({ portalUrl }: { portalUrl: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <div className="mobile-nav">
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-links"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav id="mobile-links" aria-label="Mobile navigation">
          {[
            ['/learn', 'Learn'],
            ['/blog', 'Articles'],
            ['/resources', 'Resources'],
            ['/about', 'About'],
            ['/community', 'Community'],
          ].map(([href, label]) => (
            <Link key={href} onClick={() => setOpen(false)} href={href}>
              {label}
            </Link>
          ))}
          {portalUrl && <a href={portalUrl}>Student login ↗</a>}
        </nav>
      )}
    </div>
  );
}
