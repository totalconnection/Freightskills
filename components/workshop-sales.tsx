import Link from 'next/link';
import QuotePractice from '@/components/quote-practice';
import {
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  Container,
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
        <span>FREIGHTSKILLS / WORKING TOOLS</span>
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
    w.id === 'drayage' ? 'View Drayage Workshop order' : 'View Quote Workshop order';
  const memberUrl = new URL('/workshops/' + w.id, portalUrl).toString();
  const quote = w.id === 'quote';
  return (
    <main id="main" className={'hm hs hs-workshop hs-' + w.id}>
      <section className="hm-night hs-hero">
        <div className="hm-wrap">
          <nav className="hs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/trainings">Trainings</Link>
            <span>/</span>
            <span>{w.name}</span>
          </nav>
          <div className="hs-hero-grid">
            <div className="hs-hero-copy">
              <h1>
                <span className="hs-hero-for">{w.name} with Luis Uribe:</span>{' '}
                {w.headline}
              </h1>
              <p className="hm-lead">{w.description}</p>
              <p className="hs-hook">{quote ? 'The request is in your inbox. Know what to check before you send a number.' : 'From terminal release to empty return, know which details belong in your plan.'}</p>
              <div className="hm-actions">
                <Link className="hm-btn" href={cartUrl}>{ctaLabel}</Link>
                <a className="hm-link" href="#inside">See what’s inside</a>
              </div>
              <div className="hs-notes">
                <p>
                  {money(product.unitAmount)} one-time purchase, lifetime access*{' '}
                  <Link href="/purchase-terms">View terms</Link>
                </p>
                <p>Enrollment checkout is in preview. Payments are not open yet.</p>
                <p><a href={memberUrl}>Already enrolled? Open workshop</a></p>
              </div>
            </div>
            <div className="hs-hero-side">
              <figure className="hs-hero-media hs-hero-media--wide">
                <img src={'/images/programs/' + w.id + '-hero.webp'} alt={quote ? 'A freight planning workspace, an illustrative image' : 'An American container terminal, an illustrative image'} width="1536" height="864" fetchPriority="high" />
              </figure>
              <div className="hs-hero-card">
                <div>
                  <h2>{quote ? 'A clearer quote starts here.' : 'See the whole container move.'}</h2>
                  <p>{w.format}</p>
                  <p className="hs-caption">Learn it. Put it to work.</p>
                </div>
                <ul>
                  {w.tools.map((t) => (
                    <li key={t.title}><Check size={16} aria-hidden="true" />{t.title}</li>
                  ))}
                </ul>
                <p className="hs-hero-price"><strong className="hm-num">{money(product.unitAmount)}</strong> <small>one time, lifetime access*</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-facts hs-facts--three">
          <ul className="hm-wrap">
            <li>{w.format}</li>
            <li>Calculator & saved quotes</li>
            <li>Learn at your own pace</li>
          </ul>
        </div>
      </section>
      <nav className="sales-jump hs-jump" aria-label="Workshop sections">
        <div className="hm-wrap">
          <a href="#inside">Curriculum</a>
          <a href="#practice">See it in practice</a>
          <a href="#fit">Is this for me?</a>
          <a href="#questions">FAQs</a>
          <a href="#enrollment">Price & access</a>
        </div>
      </nav>
      <section className="hm-section hs-why">
        <div className="hm-wrap hs-split">
          <div className="hs-prose">
            <h2>{w.problemTitle}</h2>
            <p>{w.problem}</p>
            <p className="hs-caption">Build the skill. Use it on the job.</p>
          </div>
          <div className="hs-checks">
            <h3>What you’ll be able to practice</h3>
            <ul>
              {w.outcomes.map((item) => (
                <li key={item}><Check size={20} aria-hidden="true" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="inside" className="hm-section hs-inside">
        <div className="hm-wrap">
          <div className="hm-head hm-head--split">
            <div>
              <h2>Know exactly what you’re getting.</h2>
              <p className="hm-lead">Inside the workshop.</p>
            </div>
            <p>Watch the recordings in your Freightskills Portal. Pick up where you left off and put the process to work in the same hub.</p>
          </div>
          <ol className="hs-lessons">
            {w.lessons.map((lesson) => (
              <li key={lesson.title}>
                <div>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                </div>
                <span className="hs-lesson-time hm-num">{lesson.duration}</span>
              </li>
            ))}
          </ol>
          <div className="hs-insight">
            <div>
              <h3>{quote ? 'Inside the 94-minute masterclass' : 'How the three recordings build your understanding'}</h3>
              <p>{quote ? 'Follow the decisions behind a complete quote: what to collect, how to research the buy rate, how to speak with carriers, how to set the sell rate, and how to follow through.' : 'Begin with the container and intermodal foundation, work through the longer drayage masterclass, then deepen the operational workflow in Container drayage mastery.'}</p>
              <p className="hs-caption">Topic guide to the existing recordings; these are not additional standalone video modules.</p>
            </div>
            <ol>
              {w.steps.map((step) => (
                <li key={step.title}><strong>{step.title}</strong><span>{step.description}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="hs-path hs-workflow">
        <div className="hm-wrap hs-path-grid">
          <div className="hm-head--split">
            <div>
              <h2>A workflow you can return to.</h2>
              <p className="hm-lead">From learning to doing.</p>
            </div>
            <p>{w.result}</p>
          </div>
          <ol className="hs-steps hs-steps--detail">
            {w.steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="practice" className="hm-section hs-support hs-practice">
        <div className="hm-wrap hs-split">
          <div className="hs-prose">
            <h2>{quote ? 'A markup and a margin are different numbers.' : 'The delivery is only part of the move.'}</h2>
            <p>{quote ? 'A 15% markup on $1,000 produces a $1,150 sell rate. Your $150 expected profit is 13% of the sell rate. Change the numbers to see why the distinction matters.' : 'A customer asks for a container pickup and delivery. Before you price it, you still need the release status, terminal, last free day, unloading plan, chassis needs, and empty-return instructions.'}</p>
            <p className="hs-caption">Illustrative learning example. Confirm actual costs and requirements for every shipment.</p>
          </div>
          {quote ? (
            <QuotePractice />
          ) : (
            <div className="sales-case">
              <h3>What’s missing from “Can you move this container?”</h3>
              {[['Before pickup', 'Confirm release, availability, appointment and last free day.'], ['Before you quote', 'Confirm linehaul, fuel, chassis days and additional charges.'], ['Before closeout', 'Confirm empty-return instructions and retain return evidence.']].map(([title, text]) => (
                <details key={title}>
                  <summary>{title}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <p>{text}</p>
                </details>
              ))}
              <p className="sales-caption">Open each step to see what to confirm.</p>
            </div>
          )}
        </div>
      </section>
      <section className="hm-night hm-band hs-tools">
        <div className="hm-wrap">
          <div className="hm-head">
            <h2>Keep the lesson beside the work.</h2>
            <p className="hm-lead">Included working tools.</p>
          </div>
          <div className="hs-tool-grid">
            {w.tools.map((tool) => (
              <article key={tool.title}>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="hm-section hs-fit">
        <div id="fit" className="hm-wrap hs-split">
          <div className="hs-checks hs-checks--plain">
            <h2>For the people who move freight.</h2>
            <ul>
              {w.audience.map((item) => (
                <li key={item}><Check size={20} aria-hidden="true" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <aside className="hm-night hs-teacher">
            <img src="/images/luis-uribe-teal.webp" alt="Luis Uribe, Freightskills instructor" width="727" height="777" loading="lazy" />
            <div>
              <h3>Your instructor, Luis Uribe</h3>
              <p>Founder of Freightskills. Practical freight education built around the decisions brokers, agents, and operations teams make in their daily work.</p>
              <Link href="/about" className="hm-link">Meet Luis</Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="hm-section hs-value">
        <div className="hm-wrap">
          <div className="hm-head">
            <h2>What your one-time purchase includes</h2>
            <p className="hm-lead">The training explains the decision. The tools help you repeat it.</p>
          </div>
          <ul className="hs-value-list">
            {w.tools.map((tool, i) => (
              <li key={tool.title}>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <p className="hs-value-label"><strong>Included in {money(product.unitAmount)}</strong><span>Included tool 0{i + 1}</span></p>
              </li>
            ))}
          </ul>
          <div className="hm-night hs-offer hs-offer--single">
            <div>
              <h3>{money(product.unitAmount)} for the recordings and the working tools.</h3>
              <p>{quote ? 'Use the masterclass to understand the process, the calculator to make the pricing visible, and the outreach and quote tools to prepare your next conversation.' : 'Use the recordings to understand the move, the calculator to organize the charges, and the checklist to carry the plan through each handoff.'} Lifetime access* gives you time to revisit the material as the situations come up in your work.</p>
              <p className="hs-caption">All listed tools are included in the workshop price. Live coaching is separate; Academy includes both workshops and one group call per month.</p>
              <Link className="hm-link" href="/academy">Compare the full Academy offer</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="questions" className="hm-section hs-faq hs-faq--paper">
        <div className="hm-wrap hs-faq-inner">
          <h2>A few useful details.</h2>
          <div className="hs-faqs">
            {w.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<ChevronDown size={19} aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="enrollment" className="hm-night hm-band hs-enroll">
        <div className="hm-wrap hs-enroll-grid">
          <div className="hs-enroll-main">
            <h2>Put a clearer process behind your next shipment.</h2>
            <p className="hm-lead">
              Get the recorded training and practical tools together for{' '}
              {money(product.unitAmount)}. One payment. Learn at your pace, then
              put the process to work.
            </p>
            <div className="hm-actions">
              <Link className="hm-btn" href={cartUrl}>{ctaLabel}</Link>
            </div>
            <p className="hs-caption">Lifetime access* to your purchased workshop.</p>
            <p className="hs-caption">
              *{lifetimeDefinition}{' '}
              <Link href="/purchase-terms">Read the purchase terms.</Link>
            </p>
            <a className="hm-link" href={memberUrl}>Already enrolled? Open my workshop</a>
          </div>
          <aside className="hs-member">
            <h3>{other.name}</h3>
            <p>{other.result}</p>
            <p className="hs-caption">Build your next skill.</p>
            <Link className="hm-link" href={other.path}>See the workshop</Link>
            <hr className="sales-divider" />
            <h3>Want the full learning path?</h3>
            <p>Active Freightskills Academy access includes both workshops, alongside the broader brokerage curriculum.</p>
            <Link className="hm-link" href="/academy">Explore the Academy</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
