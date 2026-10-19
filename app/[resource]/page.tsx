import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resources } from '@/lib/resources';
import { Eyebrow } from '@/components/site';
import { metadata as meta, isProduction } from '@/lib/config';
type Props = { params: Promise<{ resource: string }> };
export function generateStaticParams() {
  return resources.map((r) => ({ resource: r.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { resource } = await params;
  const r = resources.find((r) => r.slug === resource);
  return r ? meta(r.title, r.description, `/${r.slug}`) : {};
}
export default async function Resource({ params }: Props) {
  const { resource } = await params;
  const r = resources.find((r) => r.slug === resource);
  if (!r) notFound();
  return (
    <main id="main">
      <header className="page-hero wrap">
        <Link href="/resources" className="back-link">
          ← All resources
        </Link>
        <Eyebrow>{r.category}</Eyebrow>
        <h1>{r.title}</h1>
        <p className="lead">{r.description}</p>
      </header>
      <section className="wrap intro-split resource-detail-section">
        <div>
          <h2>What this guide covers.</h2>
          <ul className="check-list">
            {r.benefits.map((b) => (
              <li key={b}>
                <span aria-hidden="true">↗</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <aside className="resource-access">
          <Eyebrow>RESOURCE ACCESS</Eyebrow>
          <h2>Continue to the existing resource.</h2>
          <p>
            This preview preserves the resource’s original address. Use the
            existing website for its current access process.
          </p>
          {!isProduction ? (
            <a className="button" href={r.original}>
              Open existing resource ↗
            </a>
          ) : (
            <p>Resource access is being updated.</p>
          )}
        </aside>
      </section>
      <section className="wrap resource-strip">
        <div>
          <h2>Read a related lesson.</h2>
          <p>Find practical explanations in the article library.</p>
        </div>
        <Link className="button" href="/blog">
          Browse articles ↗
        </Link>
      </section>
    </main>
  );
}
