import Link from 'next/link';
import { posts, summarizePost } from '@/lib/posts';
import { LibrarySearch } from '@/components/library-search';
import { Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
export const metadata = meta(
  'Freight brokerage articles & video lessons',
  'Practical articles on prospecting, freight quoting, carrier qualification, LTL, drayage and managing shipments. Based on lessons by Luis Uribe.',
  '/blog',
);
export default function Blog() {
  return (
    <main id="main">
      <header className="page-hero wrap">
        <Eyebrow>The Freightskills blog</Eyebrow>
        <h1>Freight brokerage articles.</h1>
        <p className="lead">
          Learn how to find shippers, quote freight, qualify carriers and manage
          shipments. Each article builds on an original video lesson from Luis
          Uribe.
        </p>
        <Link className="text-link" href="/videos">
          Browse the video lessons ↗
        </Link>
      </header>
      <section className="wrap library-section" aria-label="Article library">
        <LibrarySearch posts={posts.map(summarizePost)} />
      </section>
    </main>
  );
}
