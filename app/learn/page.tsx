import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { topics } from '@/lib/topics';
import { Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
export const metadata = meta(
  'Learn practical freight brokerage skills',
  'Explore freight brokerage by topic: prospecting, rates, carrier qualification, shipment management, LTL, and container drayage.',
  '/learn',
);
export default function Learn() {
  return (
    <main id="main">
      <header className="page-hero wrap">
        <Eyebrow>Free freight broker training</Eyebrow>
        <h1>What do you want to learn?</h1>
        <p className="lead">
          Explore the lessons by topic, from finding your first shipper to
          managing specialized freight.
        </p>
      </header>
      <section className="wrap topic-grid">
        {topics.map((t) => (
          <Link className="topic-card" href={`/learn/${t.slug}`} key={t.slug}>
            <span className="micro">{t.label}</span>
            <h2>{t.title}</h2>
            <p>{t.description}</p>
            <span className="text-link">
              Explore lessons <ArrowUpRight size={18} />
            </span>
          </Link>
        ))}
      </section>
      <section className="wrap resource-strip">
        <div>
          <h2>Looking for something specific?</h2>
          <p>Search the complete article library.</p>
        </div>
        <Link className="button" href="/blog">
          Find an article <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
