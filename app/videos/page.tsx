import Link from 'next/link';
import inventory from '@/content/videos.json';
import { posts } from '@/lib/posts';
import { VideoLibrary } from '@/components/video-library';
import { Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
export const metadata = meta(
  'Freight brokerage video lessons by Luis Uribe',
  'Explore freight broker video lessons on finding shippers, quoting freight, carriers, operations and business fundamentals. Each video links to a practical guide.',
  '/videos',
);
export default function Videos() {
  const visible = new Set(posts.map((p) => p.slug));
  const videos = inventory.filter((v) => visible.has(v.articleSlug));
  return (
    <main id="main">
      <header className="page-hero wrap">
        <Eyebrow>WATCH. UNDERSTAND. PUT IT TO WORK.</Eyebrow>
        <h1>
          The video
          <br />
          <span>library.</span>
        </h1>
        <p className="lead">
          Practical freight lessons from Luis Uribe. Find the original video,
          then explore the detailed guide. Related lessons share a guide when
          they answer the same question.
        </p>
        <Link href="/blog" className="text-link">
          Browse the article library ↗
        </Link>
      </header>
      <section className="wrap library-section" aria-label="Video library">
        <VideoLibrary videos={videos} />
      </section>
    </main>
  );
}
