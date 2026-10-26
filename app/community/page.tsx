import { metadata as meta } from '@/lib/config';
import { Check, BookOpen, Workflow, MessagesSquare } from 'lucide-react';
import { CTA, Eyebrow } from '@/components/site';
import { CommunityFAQ } from '@/components/community-faq';
export const metadata = meta(
  'Join the free Freightskills community',
  'Connect with freight professionals and discuss practical lessons in the Freightskills community.',
  '/community',
);
export default function Community() {
  return (
    <main id="main">
      <section className="page-hero wrap intro-split">
        <div>
          <Eyebrow>Freightskills on Skool</Eyebrow>
          <h1>Learn alongside other freight professionals.</h1>
          <p className="lead">
            A place to build freight knowledge, make sense of technology and
            learn alongside people doing the work.
          </p>
          <p style={{ maxWidth: 570, marginTop: 20 }}>
            Whether you’re learning the fundamentals or improving an established
            operation, bring your questions and your experience. There’s more to
            learn together.
          </p>
        </div>
        <aside className="join-card">
          <span className="eyebrow" style={{ color: 'var(--mint)' }}>
            FREIGHTSKILLS ON SKOOL
          </span>
          <div className="price">
            Free<span> to join</span>
          </div>
          <h2>Join the Freightskills community.</h2>
          <ul className="check-list">
            {[
              'Freight and logistics discussions',
              'Practical technology conversations',
              'Connections with fellow professionals',
              'A place to share questions and lessons',
            ].map((x) => (
              <li key={x}>
                <Check size={19} />
                {x}
              </li>
            ))}
          </ul>
          <CTA external className="light">
            Join Freightskills on Skool
          </CTA>
          <p style={{ fontSize: 12, marginTop: 15, textAlign: 'center' }}>
            Opens Skool · Create an account or sign in to join
          </p>
        </aside>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>What to discuss</Eyebrow>
            <h2>Talk through the work.</h2>
          </div>
          <p>
            The community brings our videos, ideas and industry conversations
            into one place.
          </p>
        </div>
        <div className="pillars">
          {[
            {
              icon: BookOpen,
              title: 'Learn the freight behind the work.',
              text: 'Talk through quoting, customer relationships, carrier operations and the decisions that matter on a real shipment.',
            },
            {
              icon: Workflow,
              title: 'Build confidence with technology.',
              text: 'Explore practical uses for AI and automation. Discuss what works, what needs checking and where human judgment comes first.',
            },
            {
              icon: MessagesSquare,
              title: 'Bring a question. Share a lesson.',
              text: 'Get different perspectives from peers, share your experience and discover how others approach the same challenges.',
            },
          ].map((x) => (
            <article className="pillar" key={x.title}>
              <div className="pillar-top">
                <x.icon size={27} />
              </div>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="founder-section">
        <div className="wrap">
          <Eyebrow>Getting started</Eyebrow>
          <h2 style={{ marginBottom: 42 }}>How to join</h2>
          <div className="steps">
            {[
              {
                title: 'Join the group.',
                text: 'Follow the link to Skool, sign in or create your account, and complete the group’s joining steps.',
              },
              {
                title: 'Introduce yourself.',
                text: 'Tell us your role in freight, what you’re working on and one skill you want to build.',
              },
              {
                title: 'Join a conversation.',
                text: 'Explore the discussions and resources. Ask a specific question or share something you’ve learned.',
              },
            ].map((x, i) => (
              <div key={x.title}>
                <span className="step-number">0{i + 1} /</span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="faq">
          <Eyebrow>Before you join</Eyebrow>
          <h2>Common questions</h2>
          <CommunityFAQ />
        </div>
      </section>
      <section className="community-band">
        <div className="wrap band-inner">
          <div>
            <h2>Join the conversation.</h2>
            <p>Ask a question or share something you’ve learned in freight.</p>
          </div>
          <CTA external className="light">
            Join the free community
          </CTA>
        </div>
      </section>
    </main>
  );
}
