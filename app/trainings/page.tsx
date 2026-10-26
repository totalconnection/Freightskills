import Link from 'next/link';
import { ArrowRight, BookOpen, Calculator, Check } from 'lucide-react';
import { WorkshopIllustration } from '@/components/workshop-sales';
import { workshops } from '@/lib/trainings';
import { checkoutCatalog, money } from '@/lib/commerce-catalog';
import { metadata as meta, portalUrl } from '@/lib/config';
export const metadata = meta(
  'Trainings',
  'Focused freight workshops with Luis Uribe. Learn the quoting process or container drayage, then put the lessons to work with practical calculators and workflow tools.',
  '/trainings',
);
export default function Trainings() {
  const memberHome = new URL('/app', portalUrl).toString();
  return (
    <main id="main" className="training-page">
      <section className="training-directory-hero">
        <div className="wrap">
          <p className="eyebrow">Freight Skills Trainings</p>
          <h1>
            Learn a skill.
            <br />
            Put it to work.
          </h1>
          <p>
            Focused workshops for the everyday decisions that move freight.
            Start with quoting or container drayage, then use the tools to turn
            the training into a repeatable process.
          </p>
          <a href="#workshops" className="text-link">
            Find your workshop <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <section id="workshops" className="training-section">
        <div className="wrap training-directory">
          {workshops.map((w, i) => (
            <article
              className={'training-directory-item training-' + w.id}
              key={w.id}
            >
              <div className="training-directory-copy">
                <p className="eyebrow">
                  0{i + 1} / {w.category}
                </p>
                <h2>{w.name}</h2>
                <p>{w.result}</p>
                <ul>
                  <li>
                    <BookOpen size={17} />
                    {w.format}
                  </li>
                  <li>
                    <Calculator size={17} />
                    {w.id === 'quote'
                      ? 'Freight quote calculator & saved tracker'
                      : 'Drayage calculator & container checklist'}
                  </li>
                  <li>
                    <Check size={17} />
                    Self-paced learning in your Freight Skills Portal
                  </li>
                </ul>
                <p className="training-purchase-note">
                  {money(
                    checkoutCatalog().find(
                      (product) => product.id === w.id + '-workshop',
                    )!.unitAmount,
                  )}{' '}
                  one-time · Lifetime access*{' '}
                  <Link href="/purchase-terms">View terms</Link>
                </p>
                <Link className="button" href={w.path}>
                  Explore {w.name} <ArrowRight size={18} />
                </Link>
              </div>
              <Link
                href={w.path}
                aria-label={'See inside the ' + w.name}
                className="training-preview-link"
              >
                <WorkshopIllustration kind={w.id} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="training-directory-note">
        <div className="wrap">
          <h2>Already learning with Freight Skills?</h2>
          <p>
            Active Freight Skills Academy access includes both workshops. Open
            your portal to see the training and resources available to you.
          </p>
          <a className="text-link" href={memberHome}>
            Go to my portal <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
