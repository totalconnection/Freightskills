import { posts } from '@/lib/posts';
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
        <Eyebrow>THE FREIGHTSKILLS LIBRARY</Eyebrow>
        <h1>
          Find your next
          <br />
          <span>better answer.</span>
        </h1>
        <p className="lead">
          Detailed lessons for the decisions you make in freight. Read, watch,
          and come back when you need them.
        </p>
      </header>
      <section className="wrap library-section" aria-label="Article library">
        <LibrarySearch posts={posts} />
      </section>
    </main>
  );
}
