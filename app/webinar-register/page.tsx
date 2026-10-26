import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Logo } from '@/components/site';
import { WebinarRegistrationForm } from '@/components/webinar-registration-form';
import { metadata as meta, isProduction } from '@/lib/config';
import { webinar, getWebinarRegistration } from '@/lib/webinar';
import './webinar.css';

export const metadata = {
  ...meta(
    `${webinar.title} | Free Webinar`,
    webinar.description,
    '/webinar-register',
  ),
  robots: {
    index:
      isProduction && webinar.approved && Boolean(getWebinarRegistration()),
    follow: isProduction,
  },
};

export default function WebinarRegister() {
  return (
    <main id="main" className="webinar-landing">
      <header className="wrap webinar-header">
        <Logo />
        <Link href="/">
          Back to Freightskills <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </header>
      {!webinar.approved && (
        <div className="webinar-review-note">
          <div className="wrap">
            Design preview · Working title and learning points, pending review
            of the presentation.
          </div>
        </div>
      )}
      <section className="webinar-hero" aria-labelledby="webinar-title">
        <div className="wrap">
          <div className="webinar-heading">
            <p className="section-label">Free training with Luis Uribe</p>
            <h1 id="webinar-title">{webinar.title}</h1>
            <p>{webinar.description}</p>
          </div>
          <div className="webinar-registration-grid">
            <WebinarRegistrationForm />
            <div className="webinar-learning">
              <h2>What you’ll explore</h2>
              <ul>
                {webinar.learningPoints.map((point) => (
                  <li key={point.title}>
                    <Check size={20} aria-hidden="true" />
                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="webinar-audience">
                For freight business owners, brokers and teams looking to
                improve how they sell, operate and grow.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="wrap webinar-challenges"
        aria-labelledby="webinar-challenges-title"
      >
        <div className="webinar-section-heading">
          <p className="section-label">Where growth gets difficult</p>
          <h2 id="webinar-challenges-title">
            Recognize any of these challenges?
          </h2>
          <p>
            Start by understanding what is getting in the way of the business
            you want to build.
          </p>
        </div>
        <div className="webinar-challenge-grid">
          {webinar.challenges.map((challenge) => (
            <article key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="webinar-host" aria-labelledby="webinar-host-title">
        <div className="wrap webinar-host-grid">
          <div className="webinar-host-photo">
            <img
              src="/images/luis-uribe.webp"
              alt="Luis Uribe, founder of Freightskills"
              width="727"
              height="777"
              loading="lazy"
            />
          </div>
          <div>
            <p className="section-label">Meet your instructor</p>
            <h2 id="webinar-host-title">Luis Uribe</h2>
            <p>
              Luis founded Freightskills to teach the practical side of the
              freight business: finding customers, preparing quotes, working
              with carriers and managing shipments.
            </p>
            <p>
              His teaching connects freight knowledge with the sales processes,
              operating routines and modern tools that support the people doing
              the work.
            </p>
            <Link href="/about" className="text-link">
              More about Luis <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="webinar-final">
        <div className="wrap">
          <h2>Start with the free training.</h2>
          <p>Take a closer look at how you sell, operate and grow.</p>
          <a className="button" href="#webinar-registration">
            Go to registration <ArrowRight size={18} aria-hidden="true" />
          </a>
          <span>With Luis Uribe · Founder of Freightskills</span>
        </div>
      </section>
      <footer className="wrap webinar-footer">
        <Logo />
        <span>© {new Date().getFullYear()} Freightskills</span>
        <Link href="/">Visit the main website</Link>
      </footer>
    </main>
  );
}
