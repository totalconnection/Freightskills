import Link from 'next/link';
import { Eyebrow } from '@/components/site';
import { metadata as meta } from '@/lib/config';
export const metadata = meta(
  'About Luis Uribe & Freightskills',
  'Learn about Freightskills and Luis Uribe’s practical approach to freight brokerage education.',
  '/about',
);
export default function About() {
  return (
    <main id="main">
      <section className="wrap page-hero about-hero">
        <div>
          <Eyebrow>LUIS URIBE / FREIGHTSKILLS</Eyebrow>
          <h1>
            Learn the why.
            <br />
            <span>Then do the work.</span>
          </h1>
          <p className="lead">
            Freightskills brings practical freight brokerage knowledge into
            clear, detailed lessons you can return to.
          </p>
          <Link href="/learn" className="button">
            Explore the lessons ↗
          </Link>
        </div>
        <div className="founder-photo">
          <img
            src="/images/luis-uribe.webp"
            alt="Luis Uribe"
            width="727"
            height="777"
          />
          <span>YOUR INSTRUCTOR / LUIS URIBE</span>
        </div>
      </section>
      <section className="founder-section">
        <div className="wrap founder-grid">
          <div>
            <Eyebrow>THE APPROACH</Eyebrow>
            <h2>
              Start with the shipment.
              <br />
              Understand the decisions.
            </h2>
          </div>
          <div>
            <p className="large-copy">
              Freight brokerage connects people, information, and a physical
              shipment. Every handoff matters.
            </p>
            <p>
              Luis’s teaching covers researching shippers, preparing quotes,
              working with carriers, managing shipments, and understanding
              specialized modes such as LTL and drayage.
            </p>
            <p>
              The public library turns those video lessons into organized
              written resources. Each article keeps a link to the original
              teaching so you can read the explanation and watch the lesson in
              context.
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <Eyebrow>WHAT YOU’LL FIND HERE</Eyebrow>
        <div className="pillars">
          {[
            {
              title: 'Practical detail.',
              text: 'The information to gather, the questions to ask, and the decisions to understand before taking the next step.',
            },
            {
              title: 'Connected lessons.',
              text: 'Topics organized around the work, with related articles that help you connect prospecting, quoting, and execution.',
            },
            {
              title: 'The original teaching.',
              text: 'Video sources alongside written explanations, with historical context and current primary references where needed.',
            },
          ].map((x) => (
            <div className="pillar" key={x.title}>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
