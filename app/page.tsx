import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { Eyebrow, CommunityBand } from '@/components/site';
import { ArticleCard } from '@/components/article-card';
import { posts } from '@/lib/posts';
import { topics } from '@/lib/topics';
import { metadata as meta } from '@/lib/config';
export const metadata = meta(
  'Practical freight brokerage skills & lessons',
  'Learn prospecting, quoting, carrier qualification, shipment management, LTL and drayage with practical lessons from Luis Uribe.',
  '/',
);
export default function Home() {
  return (
    <main id="main">
      <section className="wrap home-hero">
        <div className="hero-copy">
          <Eyebrow>FREIGHT BROKERAGE. EXPLAINED.</Eyebrow>
          <h1>
            Learn the skills.
            <br />
            Understand
            <br />
            the <span>freight.</span>
          </h1>
          <p>
            Practical freight brokerage lessons from Luis Uribe. From the first
            shipper conversation to the last delivery detail.
          </p>
          <div className="hero-actions">
            <Link href="/learn" className="button">
              Explore free lessons <ArrowUpRight size={19} />
            </Link>
            <Link className="plain-link" href="/about">
              Meet Luis <ArrowRight size={16} />
            </Link>
          </div>
          <p className="hero-footnote">
            Real topics. Detailed explanations. Ready when you are.
          </p>
        </div>
        <div className="hero-media">
          <div className="media-topline">
            <span>THE WORK BEHIND THE MOVE</span>
            <span>01 / FREIGHTSKILLS</span>
          </div>
          <img
            src="/images/freight-terminal.webp"
            alt="Illustration of organized container rows at an intermodal terminal"
            width="1440"
            height="810"
            fetchPriority="high"
          />
          <Link
            href="/blog/container-drayage-explained"
            className="hero-feature"
          >
            <span className="round-play">
              <Play size={21} fill="currentColor" />
            </span>
            <div>
              <span className="micro">START WITH A LESSON</span>
              <strong>Understand the whole move.</strong>
              <span>Container drayage, explained</span>
            </div>
            <ArrowUpRight size={24} />
          </Link>
          <div className="media-caption">
            A closer look at the decisions behind every shipment.
          </div>
        </div>
      </section>
      <section className="knowledge-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>BUILD YOUR KNOWLEDGE</Eyebrow>
              <h2>
                Better at the work.
                <br />
                One skill at a time.
              </h2>
            </div>
            <p>
              Start with the part of freight you want to understand. Go deeper
              when you’re ready.
            </p>
          </div>
          <div className="learning-grid">
            {[
              {
                t: topics[0],
                n: '01',
                title: 'Find shippers.',
                sub: 'Prospecting & sales',
              },
              {
                t: topics[1],
                n: '02',
                title: 'Price the load.',
                sub: 'Quoting & rates',
              },
              {
                t: topics[2],
                n: '03',
                title: 'Choose carriers.',
                sub: 'Qualification & relationships',
              },
            ].map((x) => (
              <Link
                key={x.n}
                href={`/learn/${x.t.slug}`}
                className="learning-card"
              >
                <div className="learning-top">
                  <span>
                    {x.n} / {x.sub.toUpperCase()}
                  </span>
                  <ArrowUpRight size={22} />
                </div>
                <h3>{x.title}</h3>
                <p>{x.t.description}</p>
                <span className="learning-link">
                  Explore the topic <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>
          <div className="more-topics">
            <span>KEEP EXPLORING</span>
            {topics.slice(3).map((t) => (
              <Link key={t.slug} href={`/learn/${t.slug}`}>
                {t.title}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>FROM THE LIBRARY</Eyebrow>
            <h2>
              Less guesswork.
              <br />
              More understanding.
            </h2>
          </div>
          <Link className="text-link" href="/blog">
            Browse all articles <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="blog-list">
          {posts.slice(0, 3).map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <section className="founder-section">
        <div className="wrap founder-home">
          <div className="founder-photo">
            <img
              src="/images/luis-uribe.webp"
              alt="Luis Uribe, Freightskills instructor"
              width="727"
              height="777"
              loading="lazy"
            />
            <span>LUIS URIBE / FREIGHTSKILLS</span>
          </div>
          <div>
            <Eyebrow>THE PERSON BEHIND THE LESSONS</Eyebrow>
            <h2>
              Freight is in
              <br />
              the details.
            </h2>
            <p className="large-copy">
              Understanding why a decision matters is what makes a lesson useful
              on the next load.
            </p>
            <p>
              Luis teaches the practical side of freight brokerage: researching
              shippers, working with carriers, quoting shipments, and handling
              the details that connect them.
            </p>
            <p>
              The library brings those lessons together, with the original
              videos and written explanations you can return to.
            </p>
            <Link className="text-link" href="/about">
              More about Luis <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap resource-strip">
        <div>
          <Eyebrow>PUT THE DETAILS IN ORDER</Eyebrow>
          <h2>Keep useful resources close.</h2>
          <p>
            Find the existing Freightskills guides for drayage, carrier
            onboarding, and shipper conversations.
          </p>
        </div>
        <Link className="button" href="/resources">
          Explore resources <ArrowUpRight size={18} />
        </Link>
      </section>
      <CommunityBand />
    </main>
  );
}
