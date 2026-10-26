import Link from 'next/link';
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
 return <main id="main" className="wrap legal-page"><p className="eyebrow">FREIGHTSKILLS LLC</p><h1>{title}</h1><p>Effective October 26, 2026</p><nav aria-label="Legal policies"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms of use</Link><Link href="/cookies">Cookies</Link><Link href="/data-retention">Data retention</Link></nav><div className="legal-copy">{children}</div><p>Freightskills LLC · 11 Main Street, Holmdel, NJ 07733, United States<br/><a href="mailto:luis@freightskills.com">luis@freightskills.com</a></p></main>;
}
