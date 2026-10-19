import Link from 'next/link';
import { notFound } from 'next/navigation';
import { topics } from '@/lib/topics';
import { posts } from '@/lib/posts';
import { ArticleCard } from '@/components/article-card';
import { Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
type Props = { params: Promise<{ topic: string }> };
export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { topic } = await params;
  const t = topics.find((t) => t.slug === topic);
  return t
    ? meta(
        t.title + ' lessons for freight brokers',
        t.description,
        `/learn/${t.slug}`,
      )
    : {};
}
export default async function Topic({ params }: Props) {
  const { topic } = await params;
  const t = topics.find((t) => t.slug === topic);
  if (!t) notFound();
  const lessons = posts.filter((p) => p.topic === topic);
  return (
    <main id="main">
      <header className="wrap page-hero">
        <Link className="back-link" href="/learn">
          ← All topics
        </Link>
        <Eyebrow>{t.label.toUpperCase()}</Eyebrow>
        <h1>
          {t.title}
          <span>.</span>
        </h1>
        <p className="lead">{t.description}</p>
      </header>
      <section className="topic-intro">
        <div className="wrap intro-split">
          <h2>{t.question}</h2>
          <ol className="topic-steps">
            {t.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section wrap">
        <Eyebrow>START HERE</Eyebrow>
        <div className="blog-list">
          {lessons.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <nav className="wrap topic-crosslinks" aria-label="Related topics">
        <span className="micro">EXPLORE ANOTHER SKILL</span>
        {topics
          .filter((x) => x.slug !== topic)
          .map((x) => (
            <Link href={`/learn/${x.slug}`} key={x.slug}>
              {x.title} ↗
            </Link>
          ))}
      </nav>
    </main>
  );
}
