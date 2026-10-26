import Link from 'next/link';
import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { ArrowRight, Check, FileText } from 'lucide-react';
import { resources, resourceAliases } from '@/lib/resources';
import { resourceLanding, type ResourceSlug } from '@/lib/resource-landing';
import { ResourceForm } from '@/components/resource-form';
import { Logo, Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
type Props = { params: Promise<{ resource: string }> };
export function generateStaticParams() {
  return resources.map((r) => ({ resource: r.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { resource } = await params;
  const r = resources.find((r) => r.slug === resource);
  return r ? meta(`Free ${r.title}`, r.description, `/${r.slug}`) : {};
}
export default async function Resource({ params }: Props) {
  const { resource } = await params;
  if (resourceAliases[resource]) redirect('/'+resourceAliases[resource]);
  const r = resources.find((r) => r.slug === resource);
  if (!r) notFound();
  const copy = resourceLanding[r.slug as ResourceSlug];
  const isUSVisitor = (await headers()).get('cf-ipcountry') === 'US';
  return (
    <main id="main" className="lead-landing">
      <header className="magnet-header wrap">
        <Logo />
        <span>FREE FREIGHTSKILLS RESOURCE</span>
      </header>
      <section className="magnet-hero">
        <div className="wrap magnet-hero-grid">
          <div className="magnet-pitch">
            <Eyebrow>
              {r.category} / FREE {r.format.toUpperCase()}
            </Eyebrow>
            <h1>{copy.headline}</h1>
            <p className="lead">{copy.intro}</p>
            <a className="button magnet-mobile-cta" href="#get-resource">
              Get the free resource <ArrowRight size={18} />
            </a>
            <ul className="magnet-benefits">
              {r.benefits.map((b) => (
                <li key={b}>
                  <Check size={19} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="magnet-author">
              <img
                src="/images/luis-uribe.webp"
                width="46"
                height="46"
                alt="Luis Uribe"
              />
              <div>
                <strong>From Luis Uribe</strong>
                <span>Practical freight brokerage education</span>
              </div>
            </div>
          </div>
          <ResourceForm key={r.slug} slug={r.slug} isUSVisitor={isUSVisitor} title={r.title} action={copy.action} />
        </div>
      </section>
      <section className="magnet-fit">
        <div className="wrap">
          <span>BUILT FOR THE WORK</span>
          <p>{copy.audience}</p>
        </div>
      </section>
      <section className="wrap magnet-inside">
        <div>
          <Eyebrow>WHY THIS RESOURCE</Eyebrow>
          <h2>{copy.problem}</h2>
          <p>{copy.explanation}</p>
        </div>
        <div className="magnet-outline">
          <FileText size={26} aria-hidden="true" />
          <p className="eyebrow">WHAT YOU’LL GET</p>
          <img className="resource-landing-cover" src={r.file.cover} alt={`${r.title} cover`} width="800" height="448" loading="lazy" />
          <h3>{r.title}</h3>
          <p>{r.format}</p>
          <ol>
            {r.benefits.map((b, i) => (
              <li key={b}>
                <span>0{i + 1}</span>
                {b}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="magnet-use">
        <div className="wrap">
          <Eyebrow>PUT IT TO WORK</Eyebrow>
          <h2>A reference you can come back to.</h2>
          <ol>
            {copy.steps.map((s, i) => (
              <li key={s}>
                <span>0{i + 1}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap magnet-faq">
        <div>
          <Eyebrow>A FEW DETAILS</Eyebrow>
          <h2>Before you get the guide.</h2>
        </div>
        <div>
          <details>
            <summary>Is this resource free?</summary>
            <p>Yes. This resource is offered free, with no payment required.</p>
          </details>
          <details>
            <summary>{copy.faq[0]}</summary>
            <p>{copy.faq[1]}</p>
          </details>
          <details>
            <summary>How do I receive it?</summary>
            <p>
              Complete the form and you’ll go straight to a thank-you page with your PDF download and an optional invitation to the free FreightSkills community.
            </p>
          </details>
          <details>
            <summary>Do I need to provide a phone number?</summary>
            <p>
              No. First name, last name and email are required. You can leave
              the phone field empty or choose “Skip phone number.”
            </p>
          </details>
        </div>
      </section>
      <section className="magnet-final">
        <div className="wrap">
          <Eyebrow>TAKE THE NEXT STEP</Eyebrow>
          <h2>{r.cover}</h2>
          <p>Keep the {r.title} close for your next conversation.</p>
          <a href="#get-resource" className="button">
            {copy.action}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <footer className="wrap magnet-footer">
        <Logo />
        <span>© {new Date().getFullYear()} Freightskills</span>
        <nav aria-label="Resource footer">
          <Link href="/about">About Luis</Link>
          <Link href="/resources">All resources</Link>
        </nav>
      </footer>
    </main>
  );
}
