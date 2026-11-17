import {whopCheckout} from '@/lib/commerce-catalog';
import Link from 'next/link';
import { academyModules } from '@/lib/academy-curriculum';
import { Check, ChevronDown } from 'lucide-react';
import { metadata as meta, portalUrl } from '@/lib/config';
export const metadata=meta('Freightskills Academy for Freight Brokers','Build a connected approach to finding customers, quoting freight, coordinating shipments and growing your book of business with Luis Uribe.','/academy');
const inquiry='#enrollment';
const faqs=[['How is Academy different from a workshop?','A workshop focuses on one job: quoting or container drayage. Academy connects the broader work of a freight broker, from customer research and sales conversations through shipment execution and business improvement. Active Academy access includes both workshops.'],['Is this for freight agents or brokerage owners?','The learning path includes separate agent and owner readiness topics, followed by shared sales, quoting and operations topics. Your responsibilities still depend on your role and your brokerage’s policies.'],['What is available now?','The Academy learning path is being refreshed. Ask for the current lesson availability and release schedule before enrolling; the roadmap on this page describes the planned learning progression.'],['What does enrollment cost?','Enrollment is $625, paid once. It includes Academy access, both workshops, course updates, and six months of twice-monthly live group video Q&A with Luis Uribe. Applicable taxes are shown at checkout.'],['What support and updates are included?','Your first six months from enrollment include two live group video Q&A sessions per month with Luis Uribe. Bring questions about prospecting, quotes, carriers and shipment decisions. This is group support, not one-to-one consulting. Course updates are included with your course access.'],['What happens after six months?','Your included live Q&A period ends after six months. Your course access continues under the lifetime-access terms. Any future ongoing-support membership would be optional and purchased separately; enrollment does not automatically start a subscription.'],['What does lifetime access mean?','Lifetime access means access for the lifetime of the Freightskills business, guaranteed for a minimum of one year from purchase.'],['Will I get customers or a guaranteed income?','The training helps you develop your process and judgment. Customer acquisition, profitability and business results depend on your work and market conditions; they are not guaranteed.']];
const roleLabel = { Both: 'Agents and brokerage owners', Optional: 'Optional specialization', Agent: 'Agent readiness path', Owner: 'Brokerage-owner readiness path' } as Record<string, string>;
const valueItems = [
  ['The foundation','Academy curriculum + both readiness paths','Connect prospecting, sales, pricing, execution and account growth. Use the agent or owner material that matches your responsibilities.','Included in Academy'],
  ['Bonus 01','Quote Workshop + quoting tools','The 94-minute masterclass helps you organize your pricing decisions. The calculator, carrier outreach prompts, quote PDFs and saved tracker help you carry those decisions into the next request.','$149 standalone catalog price'],
  ['Bonus 02','Drayage Workshop + container tools','Three recordings totaling 244 minutes, a dedicated drayage calculator and a printable move checklist help you see the costs and handoffs through empty return.','$149 standalone catalog price'],
  ['Bonus 03','Editable contract templates','Start from the portal’s Broker–Carrier Agreement and Warehousing Contract templates, with highlighted fields to customize. Use them as working drafts for review with your own advisers.','Included in Academy'],
  ['Reference material','Lesson downloads + specialization library','Return to published lesson resources and optional masterclasses when you need to go deeper. Downloads and recordings are available as they are released in your portal.','Included in Academy'],
  ['Live support','Twice-monthly video Q&A with Luis','Six months of live group Q&A from enrollment. Work through questions about outreach, quoting, carrier decisions and shipment coordination.','12 group sessions over six months'],
  ['Keep learning','Full updates to the course','Return to updated course material as it is released, instead of treating your training as a single pass through a static set of lessons.','Included with your access'],
  ['Time to apply it','Lifetime access*','Revisit the relevant lesson when you encounter that customer conversation, pricing decision or operating question in your own work.','Business lifetime; minimum one year'],
];
const supportTopics = [
  ['Prospecting','Who to contact and how to start the conversation.'],
  ['Quoting','Which details, costs and assumptions to check.'],
  ['Carriers','Questions to ask before committing to a move.'],
  ['Operations','How to approach the next shipment handoff.'],
];
export default function Academy() {
  return (
    <main id="main" className="hm hs">
      <section className="hm-night hs-hero">
        <div className="hm-wrap">
          <nav className="hs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/trainings">Trainings</Link>
            <span>/</span>
            <span>Academy</span>
          </nav>
          <div className="hs-hero-grid">
            <div className="hs-hero-copy">
              <h1>
                <span className="hs-hero-for">Freightskills Academy for freight agents & brokers:</span>{' '}
                Build your freight business with a process you can put to work.
              </h1>
              <p className="hm-lead">
                Learn how to find shippers, lead the sales conversation, price freight and manage the shipment. Then bring your real questions to Luis Uribe in twice-monthly live video Q&A for your first six months. Training, working tools and support as you put it into practice.
              </p>
              <div className="hm-actions">
                <a className="hm-btn" href={inquiry}>Join Freightskills Academy</a>
                <a className="hm-link" href="#path">Explore the learning path</a>
              </div>
            </div>
            <figure className="hs-hero-media" data-slot="academy-video" data-alt="Academy introduction video">
              <img src="/images/programs/academy-hero.webp" alt="American truck on a highway, an illustrative image" width="1536" height="864" fetchPriority="high" />
            </figure>
          </div>
        </div>
        <div className="hs-facts">
          <ul className="hm-wrap">
            <li>$625 one-time</li>
            <li>Six months of live Q&A</li>
            <li>Lifetime course access*</li>
            <li>Agent & owner paths</li>
            <li>Sales + quoting + operations</li>
            <li>Both workshops + full course updates</li>
          </ul>
        </div>
      </section>
      <nav className="sales-jump hs-jump" aria-label="Academy sections">
        <div className="hm-wrap">
          <a href="#paths">Agent or broker?</a>
          <a href="#value">What’s included</a>
          <a href="#live-support">Live Q&A</a>
          <a href="#path">Learning path</a>
          <a href="#included">Workshops</a>
          <a href="#questions">FAQs</a>
          <a href="#enrollment">Enrollment</a>
        </div>
      </nav>
      <section className="hs-path">
        <div className="hm-wrap hs-path-grid">
          <div>
            <h2>From the first conversation to the next shipment.</h2>
            <p className="hm-lead">Learn the decision. Practice the process. Build your playbook.</p>
          </div>
          <ol className="hs-steps">
            {['Get ready', 'Find customers', 'Quote & move freight', 'Improve & grow'].map((p) => (
              <li key={p}><strong>{p}</strong></li>
            ))}
          </ol>
        </div>
      </section>
      <section id="why" className="hm-section hs-why">
        <div className="hm-wrap hs-split">
          <div className="hs-prose">
            <h2>You got a quote request. What happens next?</h2>
            <p>Research gets you to the conversation. The conversation gets you to the shipment details. Those details shape the quote, the carrier decision and the service you deliver.</p>
            <p>Academy brings those decisions together, so you can see how each part of the business affects the next.</p>
          </div>
          <div className="hs-checks">
            <h3>A clearer way to work</h3>
            <ul>
              {['Know what to ask before you commit.', 'Prepare outreach around a real customer fit.', 'Explain the costs and assumptions behind your quote.', 'Make the next action clear for everyone involved.'].map((t) => (
                <li key={t}><Check size={20} aria-hidden="true" /><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="live-support" className="hm-section hs-support">
        <div className="hm-wrap hs-split hs-split--cards">
          <div className="hs-prose">
            <h2>You do not have to stay stuck on the next step.</h2>
            <p>A shipper replies. A quote has a cost you did not expect. A carrier conversation leaves you unsure what to ask next. Bring those questions to a live group video session with Luis.</p>
            <p>Two sessions each month for six months from enrollment give you a regular place to work through the decisions behind the lessons.</p>
            <a className="hm-link" href="#enrollment">Get training and live support</a>
          </div>
          <div>
            <h3>Bring the work you are doing.</h3>
            <ul className="hs-cards">
              {supportTopics.map(([t, d]) => (
                <li key={t}><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ul>
            <p className="hs-caption">Live group education with Luis. Six months included; course access continues separately.</p>
          </div>
        </div>
      </section>
      <section id="paths" className="hm-section hs-roles">
        <div className="hm-wrap">
          <div className="hm-head hs-head-center">
            <h2>Adaptable for freight agents and brokerage owners.</h2>
            <p className="hm-lead">One Academy. Two paths. Built around your role.</p>
            <p>Your responsibilities change depending on whose authority you work under. Your training should reflect that. Start with the readiness path that fits your role, then follow the shared customer-to-closeout curriculum.</p>
          </div>
          <div className="hs-role-grid">
            <article className="hm-night">
              <h3>The agent path</h3>
              <p className="hs-role-line">Build your book within a host brokerage.</p>
              <ul>
                <li>Evaluate a host brokerage’s support, tools and operating fit.</li>
                <li>Understand commission splits, deductions and payment timing.</li>
                <li>Know what you can approve and when to involve your host.</li>
                <li>Build your customer pipeline, quoting process and service routine.</li>
              </ul>
              <p className="hs-role-start"><strong>Your starting point:</strong> a host-brokerage scorecard and responsibility map.</p>
            </article>
            <article className="hm-night">
              <h3>The brokerage-owner path</h3>
              <p className="hs-role-line">Build the business behind the freight.</p>
              <ul>
                <li>Organize launch readiness and operating responsibilities.</li>
                <li>Work through insurance, contracts and provider questions.</li>
                <li>Plan customer credit, cash timing and payment controls.</li>
                <li>Choose your operating setup and build repeatable team handoffs.</li>
              </ul>
              <p className="hs-role-start"><strong>Your starting point:</strong> a launch checklist and operating responsibility map.</p>
            </article>
          </div>
          <p className="hs-role-close">Starting as an agent and considering your own brokerage later? Both readiness paths are part of the Academy, so you can return to the owner material as your responsibilities develop.</p>
        </div>
      </section>
      <section id="included" className="hm-night hm-band hs-workshops">
        <div className="hm-wrap">
          <div className="hm-head">
            <h2>Two focused workshops. Included with active Academy access.</h2>
            <p className="hm-lead">Go deeper where the work demands it.</p>
          </div>
          <div className="hs-workshop-grid">
            <article>
              <h3>Quote Workshop</h3>
              <p>A 94-minute recorded masterclass, freight quote calculator, carrier outreach tools and saved quotes.</p>
              <p className="hs-caption">Pricing</p>
              <Link className="hm-link" href="/quote-mastery">Explore the Quote Workshop</Link>
            </article>
            <article>
              <h3>Drayage Workshop</h3>
              <p>Three recordings totaling over four hours, a dedicated drayage calculator and a printable container move checklist.</p>
              <p className="hs-caption">Container freight</p>
              <Link className="hm-link" href="/drayage-mastery">Explore the Drayage Workshop</Link>
            </article>
          </div>
        </div>
      </section>
      <section id="value" className="hm-section hs-value">
        <div className="hm-wrap">
          <div className="hm-head hm-head--split">
            <div>
              <h2>What your $625 includes</h2>
              <p className="hm-lead">Learn it. Work through it. Bring your questions.</p>
            </div>
            <p>The value is in putting the training to work: a path for your role, tools for everyday decisions, focused workshops, and six months of live help as you apply what you learn.</p>
          </div>
          <ul className="hs-value-list">
            {valueItems.map(([tag, title, text, value]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <p className="hs-value-label"><strong>{value}</strong><span>{tag}</span></p>
              </li>
            ))}
          </ul>
          <div className="hm-night hs-offer">
            <div>
              <h3>The course gives you a process. Live Q&A helps you work through the questions.</h3>
              <p className="hm-lead">One enrollment. A connected learning experience.</p>
              <p>Both workshops, the broader Academy curriculum, agent and owner readiness paths, working resources and six months of live group support are included.</p>
            </div>
            <div className="hs-offer-price">
              <strong className="hm-num">$625</strong>
              <p>One-time enrollment</p>
              <span>Two live video Q&A sessions per month for your first six months.</span>
              <a className="hm-btn" href={inquiry}>Join the Academy</a>
            </div>
          </div>
          <p className="hs-caption">*Lifetime course access means the lifetime of the Freightskills business, guaranteed for at least one year. Live Q&A is included for six months from enrollment.</p>
        </div>
      </section>
      <section className="hm-night hm-band hs-instructor">
        <div className="hm-wrap hs-instructor-grid">
          <figure>
            <img src="/images/luis-uribe-teal.webp" alt="Luis Uribe, founder of Freightskills" width="730" height="777" loading="lazy" />
          </figure>
          <div className="hs-prose">
            <h2>A foundation for the whole job.</h2>
            <p>Academy is for brokers and agents who want to connect their skills across the customer and shipment lifecycle. It also suits owners building a more consistent way for their team to work.</p>
            <p>If your immediate need is one skill, start with the Quote or Drayage Workshop. If you want the broader learning path, ask about Academy.</p>
            <div className="hs-instructor-card">
              <h3>Learn with Luis Uribe</h3>
              <p>Founder of Freightskills. Practical teaching centered on the sales, pricing and operating decisions freight professionals face every day.</p>
              <Link className="hm-link" href="/about">Meet Luis</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="path" className="hm-section hs-curriculum">
        <div className="hm-wrap">
          <div className="hm-head hm-head--split">
            <h2>See the modules. Understand the work you’ll practice.</h2>
            <p>Start with orientation, choose your readiness path, then work through the shared core. Optional specialization labs take selected topics further. This is the curriculum roadmap; the refresh is underway, so confirm released lessons before enrolling.</p>
          </div>
          <div className="hs-modules">
            {academyModules.map((m) => (
              <article key={m.id}>
                <div className="hs-module-top">
                  <span className="hs-module-code">{m.id}</span>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.outcome}</p>
                    <p className="hs-caption">{roleLabel[m.role] ?? m.role}</p>
                  </div>
                  <span className="hs-module-count hm-num">{m.lessons.length} lessons</span>
                </div>
                <details open={m.id === 'A' || m.id === 'B' || m.id === '3'}>
                  <summary>See lessons & practice outcomes <ChevronDown size={18} aria-hidden="true" /></summary>
                  <ol>
                    {m.lessons.map((l) => (
                      <li key={l.title}><strong>{l.title}</strong><span>{l.assignment}</span></li>
                    ))}
                  </ol>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="questions" className="hm-section hs-faq">
        <div className="hm-wrap hs-faq-inner">
          <h2>Before you join.</h2>
          <div className="hs-faqs">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}<ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="hm-section hs-letter">
        <div className="hm-wrap hs-letter-inner">
          <h2>Your next customer needs more than a good sales pitch.</h2>
          <p>They need someone who asks the right questions, understands the request and follows through when the shipment gets complicated. That is the work behind a lasting customer relationship.</p>
          <p>You can spend your week collecting scripts, watching another video and switching between tools. The real progress comes when those pieces turn into a process you can actually use.</p>
          <p>That is what this Academy is designed to help you build: a connected approach to the work, focused workshops for the details, and six months of twice-monthly live Q&A to help you move from watching to doing.</p>
          <a className="hm-link" href="#enrollment">See the complete Academy offer</a>
        </div>
      </section>
      <section id="enrollment" className="hm-night hm-band hs-enroll">
        <div className="hm-wrap hs-enroll-grid">
          <div className="hs-enroll-main">
            <h2>Your training. Your tools. Your next step.</h2>
            <p className="hm-lead">Get the Academy learning path, both workshops and six months of twice-monthly live video Q&A with Luis. Build your process, then bring the questions that come up as you use it.</p>
            <div className="hs-enroll-price">
              <strong className="hm-num">$625</strong>
              <span>One-time payment, with six months of live Q&A included</span>
            </div>
            <p className="hs-caption">No automatic membership renewal. Continued live support after six months is a separate, optional offer.</p>
            <ul className="hs-enroll-list">
              {['Academy learning path for brokers and agents', 'Quote Workshop + Drayage Workshop', 'Twice-monthly live video Q&A for six months', 'Full updates to the course', 'Lifetime access*'].map((t) => (
                <li key={t}><Check size={18} aria-hidden="true" />{t}</li>
              ))}
            </ul>
            <div className="hm-actions">
              <a className="hm-btn" href={whopCheckout.academy}>Enroll for $625</a>
            </div>
            <p className="hs-caption">*Access for the lifetime of the Freightskills business, guaranteed for a minimum of one year from purchase.</p>
            <p className="hs-caption">Secure checkout through Whop. Applicable taxes are shown before payment. Use your checkout email to create and verify your portal account. Review the <Link href="/purchase-terms">purchase terms</Link> before enrolling.</p>
          </div>
          <aside className="hs-member">
            <h3>Already a member?</h3>
            <p>Pick up where you left off. Sign in to see the lessons and tools available with your enrollment.</p>
            <a className="hm-link" href={new URL('/academy',portalUrl).toString()}>Open my Academy</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
