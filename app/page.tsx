import Link from 'next/link';
import { readingMinutes } from '@/lib/article-utils';
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
  const [leadPost, ...morePosts] = posts.slice(0, 3);
  return (
    <main id="main" className="hm hm-home">
      <div className="hm-signal hm-announce">
        <p className="hm-wrap">
          <Link href={freeTrainingUrl}>
            <strong>Free webinar with Luis Uribe.</strong> Access the free
            training
          </Link>
        </p>
      </div>
      <section className="hm-night hm-hero">
        <div className="hm-wrap hm-hero-grid">
          <div className="hm-hero-copy">
            <h1>Build a better freight business.</h1>
            <p className="hm-lead">
              Practical training to help companies that move freight win more
              business, run better operations and put modern tools, including
              AI and automation, to work.
            </p>
            <div className="hm-actions">
              <Link href={freeTrainingUrl} className="hm-btn">
                Access the free training
              </Link>
            </div>
          </div>
          <figure className="hm-hero-portrait">
            <img
              src="/images/luis-uribe-teal.webp"
              alt="Luis Uribe, founder of Freightskills"
              width="730"
              height="777"
              fetchPriority="high"
            />
            <figcaption>
              <strong>Luis Uribe</strong>
              <span>Founder & instructor, Freightskills</span>
            </figcaption>
          </figure>
        </div>
        <nav className="hm-topics" aria-label="Freight training topics">
          <div className="hm-wrap hm-topics-row">
            <span>Explore the lesson library</span>
            <Link href="/learn/prospecting">Prospecting</Link>
            <Link href="/learn/quoting">Quoting</Link>
            <Link href="/learn/carriers">Carriers</Link>
            <Link href="/learn/ltl">LTL</Link>
            <Link href="/learn/drayage">Drayage</Link>
            <Link href="/learn/growth">Business growth</Link>
          </div>
        </nav>
      </section>
      <section className="hm-section hm-start">
        <div className="hm-wrap">
          <div className="hm-head hm-head--split">
            <h2>Improve the way your business works.</h2>
            <p className="hm-lead">
              Connect the skills behind moving freight with better processes
              and practical uses of technology. Start with the part of your
              business you want to improve.
            </p>
          </div>
          <ul className="hm-rows">
            {startingPoints.map((point) => (
              <li key={point.href}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
                <Link href={point.href} className="hm-link">
                  {point.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {featuredLesson && (
        <section className="hm-night hm-band hm-lesson">
          <div className="hm-wrap hm-lesson-grid">
            <div className="hm-lesson-video">
              <Video
                id={featuredLesson.videoId}
                title={featuredLesson.sourceTitle}
              />
            </div>
            <div className="hm-lesson-copy">
              <h2>How do you know what to quote?</h2>
              <p>
                A rate needs a basis. In this lesson, Luis walks through ways to
                research carrier costs and prepare a freight quote.
              </p>
              <p>
                Watch the original video, then use the written guide to revisit
                the details.
              </p>
              <div className="hm-actions">
                <Link
                  href={`/blog/${featuredLesson.slug}`}
                  className="hm-btn hm-btn--line"
                >
                  Read the quoting guide
                </Link>
                <Link href="/videos" className="hm-link">
                  Browse all video lessons
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="hm-night hm-section hm-guides">
        <div className="hm-wrap hm-guides-grid">
          <Link
            className="hm-guide-cover"
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
            <span>Drayage Checklist, guide preview</span>
          </Link>
          <div className="hm-guides-copy">
            <h2>Free resources</h2>
            <p className="hm-lead">
              A little preparation goes a long way. Use the Freightskills
              guides to organize shipment details and prepare for
              conversations with shippers and carriers.
            </p>
            <ul className="hm-guide-list">
              <li>
                <Link href="/drayage-checklist">Drayage Checklist</Link>
              </li>
              <li>
                <Link href="/onboarding-guide">
                  Carrier Vetting & Onboarding Guide
                </Link>
              </li>
              <li>
                <Link href="/niche-resource">
                  Profitable Niches & Sales Navigator
                </Link>
              </li>
            </ul>
            <Link href="/resources" className="hm-link">
              Explore all resources
            </Link>
          </div>
        </div>
      </section>
      <section className="hm-section hm-blog">
        <div className="hm-wrap">
          <div className="hm-head hm-head--split">
            <div>
              <h2>From the blog</h2>
              <p className="hm-lead">Get into the details.</p>
            </div>
            <Link href="/blog" className="hm-link">
              Browse all articles
            </Link>
          </div>
          <div className="hm-posts">
            {[leadPost, ...morePosts].filter(Boolean).map((post, i) => {
              const title = post.title.replace(/\.$/, '');
              return (
                <article
                  key={post.slug}
                  className={i === 0 ? 'hm-post hm-post--lead' : 'hm-post'}
                >
                  <Link
                    className="hm-post-image"
                    href={`/blog/${post.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={post.hero}
                      alt=""
                      width="1344"
                      height="752"
                      loading="lazy"
                    />
                  </Link>
                  <div className="hm-post-copy">
                    <h3>
                      <Link href={`/blog/${post.slug}`}>{title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <p className="hm-post-meta">
                      <span>{post.category}</span>
                      <span className="hm-num">
                        Luis Uribe · {readingMinutes(post)} min read
                      </span>
                    </p>
                    <Link
                      className="hm-link"
                      href={`/blog/${post.slug}`}
                      aria-label={`Read ${title}`}
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="hm-field hm-band hm-community">
        <div className="hm-wrap hm-community-grid">
          <div>
            <h2>Have a freight question?</h2>
            <p className="hm-lead">
              Bring it to the Freightskills community. Discuss the lessons and
              connect with other freight professionals.
            </p>
          </div>
          <div className="hm-community-action">
            <Link href="/community" className="hm-btn hm-btn--ink">
              Explore the community
            </Link>
            <span>Freightskills on Skool</span>
          </div>
        </div>
      </section>
    </main>
  );
}
