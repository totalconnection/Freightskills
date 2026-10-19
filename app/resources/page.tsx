import Link from 'next/link';
import { resources } from '@/lib/resources';
import { Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
export const metadata = meta(
  'Freight brokerage resources & guides',
  'Find Freightskills resources for drayage, carrier onboarding, prospecting, shipper objections and follow-up.',
  '/resources',
);
export default function Resources() {
  return (
    <main id="main">
      <header className="page-hero wrap">
        <Eyebrow>THE RESOURCE LIBRARY</Eyebrow>
        <h1>
          Keep the useful
          <br />
          <span>details close.</span>
        </h1>
        <p className="lead">
          Explore guides for the conversations and decisions behind a shipment.
        </p>
      </header>
      <section className="wrap resource-grid">
        {resources.map((r, i) => (
          <article className="resource-card" key={r.slug}>
            <div className="resource-number">
              0{i + 1}
              <span>{r.category}</span>
            </div>
            <div className="resource-body">
              <h2>{r.title}</h2>
              <p>{r.description}</p>
              <Link className="text-link" href={`/${r.slug}`}>
                View resource details ↗
              </Link>
            </div>
          </article>
        ))}
      </section>
      <div className="wrap resource-notice">
        <h2>Looking for an existing download?</h2>
        <p>
          Existing resource pages remain available at their original addresses.
          Student materials and contract templates belong to your separate
          training access.
        </p>
      </div>
    </main>
  );
}
