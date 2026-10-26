import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  Container,
  Play,
  Wrench,
} from 'lucide-react';
import { portalUrl } from '@/lib/config';
import { workshops, type Workshop } from '@/lib/trainings';
import {
  checkoutCatalog,
  lifetimeDefinition,
  money,
} from '@/lib/commerce-catalog';

export function WorkshopIllustration({ kind }: { kind: Workshop['id'] }) {
  const drayage = kind === 'drayage';
  return (
    <div className={'training-tool-preview ' + (drayage ? 'is-drayage' : '')}>
      <div className="tool-preview-bar">
        <span>FREIGHT SKILLS / WORKING TOOLS</span>
        {drayage ? <Container size={21} /> : <Calculator size={21} />}
      </div>
      <div className="tool-preview-body">
        <span className="tool-preview-label">
          {drayage ? 'CONTAINER MOVE BRIEF' : 'YOUR QUOTING WORKFLOW'}
        </span>
        <h3>
          {drayage
            ? 'Every handoff, accounted for.'
            : 'From the details to the decision.'}
        </h3>
        {drayage ? (
          <>
            <div className="container-route">
              <span>Terminal</span>
              <span aria-hidden="true">→</span>
              <span>Delivery</span>
              <span aria-hidden="true">→</span>
              <span>Empty return</span>
            </div>
            <ul className="preview-checks">
              <li>
                <Check size={16} />
                Shipment & container details
              </li>
              <li>
                <Check size={16} />
                Availability & deadlines
              </li>
              <li>
                <Check size={16} />
                Carrier cost & instructions
              </li>
            </ul>
            <div className="preview-output">
              <Container size={26} />
              <div>
                <strong>One move. A clear plan.</strong>
                <span>Learn it, price it, follow it through.</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="preview-costs">
              <div>
                <span>Carrier cost</span>
                <strong>$1,000</strong>
              </div>
              <div>
                <span>Markup</span>
                <strong>15%</strong>
              </div>
            </div>
            <div className="preview-quote">
              <span>Customer quote</span>
              <strong>$1,150</strong>
            </div>
            <div className="preview-output">
              <Calculator size={25} />
              <div>
                <strong>$150 expected profit</strong>
                <span>13.0% gross margin · illustrative example</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="tool-preview-footer">
        <BookOpen size={15} /> Recorded training <span>+</span>
        <Wrench size={15} /> Practical tools
      </div>
    </div>
  );
}

export default function WorkshopSales({ workshop: w }: { workshop: Workshop }) {
  const other = workshops.find((item) => item.id !== w.id)!;
  const product = checkoutCatalog().find(
    (product) => product.id === w.id + '-workshop',
  )!;
  const cartUrl = '/checkout?product=' + product.id;
  const ctaLabel =
    w.id === 'drayage' ? 'Learn Drayage Today' : 'Master Quoting Today';
  const memberUrl = new URL('/workshops/' + w.id, portalUrl).toString();
  return (
    <main id="main" className={'training-page training-' + w.id}>
      <section className="training-hero">
        <div className="wrap">
          <nav className="training-breadcrumb" aria-label="Breadcrumb">
            <Link href="/trainings">Trainings</Link>
            <span>/</span>
            <span>{w.name}</span>
          </nav>
          <div className="training-hero-grid">
            <div className="training-pitch">
              <p className="eyebrow">{w.name} · with Luis Uribe</p>
              <h1>{w.headline}</h1>
              <p className="training-lead">{w.description}</p>
              <div className="training-actions">
                <Link className="button" href={cartUrl}>
                  {ctaLabel} <ArrowRight size={18} />
                </Link>
                <p className="training-purchase-note">
                  {money(product.unitAmount)} one-time purchase · Lifetime
                  access* <Link href="/purchase-terms">View terms</Link>
                </p>
                <a className="text-link" href="#inside">
                  See what’s inside <ArrowRight size={16} />
                </a>
                <a className="training-member-link" href={memberUrl}>
                  Already enrolled? Open workshop <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <WorkshopIllustration kind={w.id} />
          </div>
          <div className="training-facts">
            <span>
              <Play size={16} />
              {w.format}
            </span>
            <span>
              <Calculator size={16} />
              Calculator & saved quotes
            </span>
            <span>
              <BookOpen size={16} />
              Learn at your own pace
            </span>
          </div>
        </div>
      </section>
      <section className="training-section">
        <div className="wrap training-problem">
          <div>
            <p className="eyebrow">Build the skill. Use it on the job.</p>
            <h2>{w.problemTitle}</h2>
            <p>{w.problem}</p>
          </div>
          <div className="training-outcomes">
            <h3>What you’ll be able to practice</h3>
            <ul>
              {w.outcomes.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="inside" className="training-section training-curriculum">
        <div className="wrap">
          <div className="training-section-heading">
            <div>
              <p className="eyebrow">Inside the workshop</p>
              <h2>The teaching, together in one place.</h2>
            </div>
            <p>
              Watch the recordings in your Freight Skills Portal. Pick up where
              you left off and put the process to work in the same hub.
            </p>
          </div>
          <div className="training-lessons">
            {w.lessons.map((lesson, i) => (
              <article className="training-lesson" key={lesson.title}>
                <span className="training-lesson-number">0{i + 1}</span>
                <div>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                </div>
                <span className="training-duration">
                  <Play size={14} />
                  {lesson.duration}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="training-section">
        <div className="wrap">
          <div className="training-section-heading">
            <div>
              <p className="eyebrow">From learning to doing</p>
              <h2>A workflow you can return to.</h2>
            </div>
            <p>{w.result}</p>
          </div>
          <ol className="training-workflow">
            {w.steps.map((step, i) => (
              <li key={step.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="training-section training-tools">
        <div className="wrap">
          <p className="eyebrow">Included working tools</p>
          <h2>Keep the lesson beside the work.</h2>
          <div className="training-tool-grid">
            {w.tools.map((tool, i) => (
              <article key={tool.title}>
                <span className="training-tool-icon">
                  {i === 0 ? (
                    <Calculator />
                  ) : i === 1 ? (
                    <BookOpen />
                  ) : (
                    <Wrench />
                  )}
                </span>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="training-section">
        <div className="wrap training-fit">
          <div>
            <p className="eyebrow">Who it’s for</p>
            <h2>For the people who move freight.</h2>
            <ul>
              {w.audience.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="training-instructor">
            <img
              src="/images/luis-uribe.webp"
              alt="Luis Uribe, Freight Skills instructor"
              width="727"
              height="777"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">Your instructor</p>
              <h3>Luis Uribe</h3>
              <p>
                Founder of Freight Skills. Practical freight education built
                around the decisions brokers, agents, and operations teams make
                in their daily work.
              </p>
              <Link href="/about" className="text-link">
                Meet Luis <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="training-section training-faq-section">
        <div className="wrap training-faq-grid">
          <div>
            <p className="eyebrow">Before you start</p>
            <h2>A few useful details.</h2>
          </div>
          <div className="training-faqs">
            {w.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <ChevronDown size={19} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="enrollment" className="training-enrollment">
        <div className="wrap training-enrollment-grid">
          <div>
            <p className="eyebrow">{w.name}</p>
            <h2>Your next step starts with a repeatable process.</h2>
            <p>
              Get the recorded training and practical tools together for{' '}
              {money(product.unitAmount)}. One payment. Learn at your pace, then
              put the process to work.
            </p>
            <Link className="button" href={cartUrl}>
              {ctaLabel} <ArrowRight size={18} />
            </Link>
            <p className="training-access-note">
              Lifetime access* to your purchased workshop.
            </p>
            <p className="training-lifetime-note">
              *{lifetimeDefinition}{' '}
              <Link href="/purchase-terms">Read the purchase terms.</Link>
            </p>
            <a className="training-free-link" href={memberUrl}>
              Already enrolled? Open my workshop <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="training-related">
            <span>ALSO EXPLORE</span>
            <h3>{other.name}</h3>
            <p>{other.result}</p>
            <Link href={other.path}>
              See the workshop <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
