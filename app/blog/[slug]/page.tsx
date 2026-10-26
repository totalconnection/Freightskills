import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, readingMinutes } from '@/lib/posts';
import { metadata as meta, siteUrl, isProduction } from '@/lib/config';
import { ArticleCard } from '@/components/article-card';
import { Video } from '@/components/video';
import { Eyebrow } from '@/components/site';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = posts.find((p) => p.slug === slug);
  return p
    ? {
        ...meta(p.seoTitle, p.excerpt, `/blog/${p.slug}`),
        openGraph: { ...meta(p.seoTitle, p.excerpt, `/blog/${p.slug}`).openGraph, type: 'article', publishedTime: p.publishedAt, images: [{ url: siteUrl + p.hero, width: 1344, height: 752, alt: p.heroAlt }] },
        twitter: { card: 'summary_large_image', title: p.seoTitle, description: p.excerpt, images: [siteUrl + p.hero] },
        robots: {
          index: isProduction && p.approved,
          follow: isProduction && p.approved,
        },
      }
    : {};
}
export default async function Post({ params }: Props) {
  const { slug } = await params;
  const p = posts.find((p) => p.slug === slug);
  if (!p) notFound();
  const related = posts.filter((x) => p.related.includes(x.slug));
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    author: { '@type': 'Person', name: 'Luis Uribe', url: siteUrl + '/about' },
    publisher: { '@type': 'Organization', name: 'Freightskills', url: siteUrl },
    mainEntityOfPage: siteUrl + '/blog/' + p.slug,
    image: siteUrl + p.hero,
    datePublished: p.publishedAt,
    dateModified: p.publishedAt,
    isBasedOn: p.videos.map((v) => v.url),
  };
  const breadcrumbs = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Freightskills', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: siteUrl + '/blog' },
      { '@type': 'ListItem', position: 3, name: p.title, item: siteUrl + '/blog/' + p.slug },
    ],
  };
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schema, breadcrumbs]).replace(/</g, '\\u003c'),
        }}
      />
      <header className="wrap post-header">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Freightskills</Link><span aria-hidden="true"> / </span><Link href="/blog">Blog</Link>
        </nav>
        <Link className="back-link" href={`/learn/${p.topic}`}>
          ← {p.category}
        </Link>
        <Eyebrow>{p.category.toUpperCase()}</Eyebrow>
        <h1>{p.title}</h1>
        <p className="lead">{p.excerpt}</p>
        <div className="post-byline">
          <img src="/images/luis-uribe.webp" alt="" width="42" height="42" />
          <span>
            Based on teaching by <Link href="/about">Luis Uribe</Link>
            <br />
            <small>{readingMinutes(p)} min read · Video + article · Published <time dateTime={p.publishedAt}>October 26, 2026</time></small>
          </span>
        </div>
        <figure className="post-hero">
          <img src={p.hero} alt={p.heroAlt} width="1344" height="752" fetchPriority="high" />
          <figcaption>Editorial illustration · Freightskills</figcaption>
        </figure>
        {!p.approved && (
          <div className="review-banner">
            Editorial draft · Awaiting Luis’s review before publication
          </div>
        )}
      </header>
      <div className="wrap post-grid">
        <article className="post-body">
          <div className="takeaway">
            <Eyebrow>THE SHORT ANSWER</Eyebrow>
            <h2>{p.searchIntent}</h2>
            <p>{p.takeaway}</p>
          </div>
          <section id="source-video">
            <h2>
              {p.videos.length > 1
                ? 'Watch the original lessons.'
                : 'Watch the original lesson.'}
            </h2>
            {p.videos.map((v) => (
              <div key={v.id} className="source-video-item">
                <Video id={v.id} title={v.title} embedded />
                <p className="video-note">
                  <a href={v.url}>{v.title} ↗</a>
                  <br />
                  Freightskills · Luis Uribe. This lesson reflects its original
                  recording period.
                </p>
              </div>
            ))}
            <Link className="text-link" href="/videos">
              Explore all video lessons ↗
            </Link>
          </section>
          {p.sections.map((s) => (
            <section key={s.id} id={s.id}>
              <h2>{s.title}</h2>
              {s.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              {s.bullets && (
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {p.sources.length > 0 && (
            <section className="source-list">
              <h2>Primary sources & further reading</h2>
              <ul>
                {p.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url}>{s.label} ↗</a>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {!isProduction && !!p.reviewNotes?.length && (
            <details className="review-notes">
              <summary>Editorial changes for Luis to review</summary>
              <ul>
                {p.reviewNotes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </details>
          )}
        </article>
        <aside className="post-aside">
          <Eyebrow>IN THIS ARTICLE</Eyebrow>
          <nav aria-label="Article contents">
            {p.sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.title}
              </a>
            ))}
            <a href="#source-video">Watch the lesson ↗</a>
          </nav>
          <div className="aside-callout">
            <span className="micro">KEEP LEARNING</span>
            <h3>{p.category}</h3>
            <p>See the bigger picture behind this lesson.</p>
            <Link className="text-link" href={`/learn/${p.topic}`}>
              Explore the topic ↗
            </Link>
          </div>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="related-section">
          <div className="wrap">
            <Eyebrow>CONNECT THE DOTS</Eyebrow>
            <h2>Keep building your knowledge.</h2>
            <div className="blog-list">
              {related.map((r) => (
                <ArticleCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
