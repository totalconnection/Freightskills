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
        <Eyebrow>CHOOSE YOUR STARTING POINT</Eyebrow>
        <h1>
          Learn the work.
          <br />
          <span>Build the skill.</span>
        </h1>
        <p className="lead">
          A clear way into the library, organized around the jobs you need to
          get done.
        </p>
      </header>
      <section className="wrap topic-grid">
        {topics.map((t, i) => (
          <Link className="topic-card" href={`/learn/${t.slug}`} key={t.slug}>
            <span className="micro">
              0{i + 1} / {t.label.toUpperCase()}
            </span>
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
