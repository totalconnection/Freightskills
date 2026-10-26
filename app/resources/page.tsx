import Link from 'next/link';
import { resources } from '@/lib/resources';
import { Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
export const metadata = meta(
  'Freight brokerage resources & guides',
  'Free PDF guides for drayage, carrier vetting, freight sales, customer research and niche prospecting.',
  '/resources',
);
export default function Resources() {
  return (
    <main id="main">
      <header className="page-hero wrap">
        <Eyebrow>The resource library</Eyebrow>
        <h1>Free guides for freight brokers.</h1>
        <p className="lead">
          Checklists and guides to help you research shippers, prepare for
          conversations and organize the details of a shipment.
        </p>
      </header>
      <section className="wrap resource-grid">
        {resources.map((r) => (
          <article className="resource-card" key={r.slug}>
            <Link href={`/${r.slug}`} aria-label={`Explore the ${r.title}`}><img className="resource-card-cover" src={r.file.cover} alt={`${r.title} cover`} width="800" height="448" loading="lazy" /></Link>
            <div className="resource-number">
              <span>{r.category}</span>
            </div>
            <div className="resource-body">
              <h2>{r.title}</h2>
              <p>{r.description}</p>
              <Link className="text-link" href={`/${r.slug}`}>
                Explore the guide ↗
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
