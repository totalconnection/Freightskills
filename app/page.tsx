import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CommunityBand } from '@/components/site';
import { ArticleCard } from '@/components/article-card';
import { Video } from '@/components/video';
import { posts } from '@/lib/posts';
import { metadata as meta, freeTrainingUrl } from '@/lib/config';

export const metadata = meta(
  'Freight business training & modern tools',
  'Practical training for companies that move freight. Improve sales and operations, and learn to use AI and automation with Freightskills and Luis Uribe.',
  '/',
);
const startingPoints = [
  {
    title: 'Build a stronger sales process',
    text: 'Find the right prospects, prepare better outreach and follow up consistently. Give your team a process they can put into practice.',
    href: '/learn/prospecting',
    link: 'Prospecting & sales lessons',
  },
  {
    title: 'Improve daily operations',
    text: 'Sharpen quoting, carrier selection and shipment management. Build the skills and routines that help your team take care of customers.',
    href: '/learn/operations',
    link: 'Freight operations lessons',
  },
  {
    title: 'Put modern tools to work',
    text: 'Learn where AI, automation and repeatable processes can reduce manual work and support the people running your business.',
    href: '/learn/growth',
    link: 'Technology & business growth',
  },
];
export default function Home() {
  const featuredLesson = posts.find(
    (p) => p.slug === 'how-freight-brokers-quote-rates',
  );
  return (
    <main id="main">
      <section className="home-intro">
        <div className="wrap intro-layout">
          <div className="intro-copy">
            <p className="section-label">
              Practical training for companies that move freight
            </p>
            <h1>Build a better freight business.</h1>
            <p className="intro-description">
              Practical training to help companies that move freight win more
              business, run better operations and put modern tools—including AI
              and automation—to work.
            </p>
            <div className="intro-actions">
              <Link href={freeTrainingUrl} className="button">
                Access the free training <ArrowRight size={18} />
              </Link>
            </div>
            <p className="intro-training-note">Free webinar with Luis Uribe</p>
          </div>
          <figure className="instructor-portrait">
            <img
              src="/images/luis-uribe.webp"
              alt="Luis Uribe, founder of Freightskills"
              width="727"
              height="777"
              fetchPriority="high"
            />
            <figcaption>
              <strong>Luis Uribe</strong>
              <span>Founder & instructor, Freightskills</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <nav className="subject-bar" aria-label="Freight training topics">
        <div className="wrap">
          <span>Explore the lesson library</span>
          <Link href="/learn/prospecting">Prospecting</Link>
          <Link href="/learn/quoting">Quoting</Link>
          <Link href="/learn/carriers">Carriers</Link>
          <Link href="/learn/ltl">LTL</Link>
          <Link href="/learn/drayage">Drayage</Link>
          <Link href="/learn/growth">Business growth</Link>
        </div>
      </nav>
      <section className="wrap home-section">
        <div className="home-section-heading">
          <p className="section-label">Freight expertise. Modern tools.</p>
          <h2>Improve the way your business works.</h2>
          <p>
            Connect the skills behind moving freight with better processes and
            practical uses of technology. Start with the part of your business
            you want to improve.
          </p>
        </div>
        <div className="starting-points">
          {startingPoints.map((point) => (
            <article key={point.href}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
              <Link href={point.href} className="text-link">
                {point.link}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      {featuredLesson && (
        <section className="lesson-feature">
          <div className="wrap feature-layout">
            <div className="feature-video">
              <Video
                id={featuredLesson.videoId}
                title={featuredLesson.sourceTitle}
              />
            </div>
            <div className="feature-copy">
              <p className="section-label">Watch a lesson</p>
              <h2>How do you know what to quote?</h2>
              <p>
                A rate needs a basis. In this lesson, Luis walks through ways to
                research carrier costs and prepare a freight quote.
              </p>
              <p>
                Watch the original video, then use the written guide to revisit
                the details.
              </p>
              <Link href={`/blog/${featuredLesson.slug}`} className="text-link">
                Read the quoting guide <ArrowRight size={17} />
              </Link>
              <Link href="/videos" className="secondary-text-link">
                Browse all video lessons
              </Link>
            </div>
          </div>
        </section>
      )}
      <section className="wrap home-section guide-feature">
        <div className="feature-copy">
          <p className="section-label">Free resources</p>
          <h2>A little preparation goes a long way.</h2>
          <p>
            Use the Freightskills guides to organize shipment details and
            prepare for conversations with shippers and carriers.
          </p>
          <ul className="guide-links">
            <li>
              <Link href="/drayage-checklist">
                Drayage Checklist <ArrowRight size={17} />
              </Link>
            </li>
            <li>
              <Link href="/onboarding-guide">
                Carrier Vetting & Onboarding Guide <ArrowRight size={17} />
              </Link>
            </li>
            <li>
              <Link href="/niche-resource">
                Profitable Niches & Sales Navigator <ArrowRight size={17} />
              </Link>
            </li>
          </ul>
          <Link href="/resources" className="text-link">
            Explore all resources <ArrowRight size={17} />
          </Link>
        </div>
        <Link
          className="guide-preview"
          href="/drayage-checklist"
          aria-label="Explore the Drayage Checklist"
        >
          <img
            src="/images/drayage-guide-cover.png"
            alt="Cover of Luis Uribe’s Drayage Checklist"
            width="834"
            height="1179"
            loading="lazy"
          />
          <span>Drayage Checklist · Guide preview</span>
        </Link>
      </section>
      <section className="home-articles">
        <div className="wrap home-section">
          <div className="section-heading">
            <div>
              <p className="section-label">From the blog</p>
              <h2>Get into the details.</h2>
            </div>
            <Link href="/blog" className="text-link">
              Browse all articles <ArrowRight size={17} />
            </Link>
          </div>
          <div className="blog-list">
            {posts.slice(0, 3).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CommunityBand />
    </main>
  );
}
