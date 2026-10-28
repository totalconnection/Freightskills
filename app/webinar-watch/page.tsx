import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TrainingVideo } from '@/components/training-video';
import { MarketingDisclosure } from '@/components/marketing-disclosure';
import { webinar } from '@/lib/webinar';
import { metadata as meta } from '@/lib/config';
export const metadata = {
  ...meta(
    'Your free training.',
    'Free Freightskills training with Luis Uribe.',
    '/webinar-watch',
  ),
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main id="main" className="wrap training-flow">
      <p className="section-label">FREE TRAINING</p>
      <h1>{webinar.title}</h1>
      <p>With Luis Uribe · Freightskills</p>
      <TrainingVideo id={webinar.video.id} hash={webinar.video.hash} title={webinar.title} />
      <p className="training-recording-note">Recorded in {webinar.video.recordedYear}. Market examples and program offers reflect that time. Visit the Academy page for current program details.</p>
      <section aria-labelledby="training-lessons">
        <h2 id="training-lessons">Three ideas to put into practice</h2>
        {webinar.learningPoints.map(point => <article key={point.title} className="training-lesson"><h3>{point.title}</h3><p>{point.description}</p></article>)}
      </section>
      <div className="training-status">
        <h2>Keep building your freight skills.</h2>
        <p>Explore the Academy for structured training to help you put these ideas into practice.</p>
        <Link className="button" href="/academy">Explore Freightskills Academy <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
      <p className="training-help">
        Need help? <a href="mailto:luis@freightskills.com">Contact Luis</a>.
      </p>
      <MarketingDisclosure />
    </main>
  );
}
