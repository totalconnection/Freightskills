import Link from 'next/link';
import { ArrowRight, Video } from 'lucide-react';
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
      <h1>Your free training.</h1>
      <p>With Luis Uribe · Freightskills</p>
      <section
        className="training-video-placeholder"
        aria-labelledby="recording-status"
      >
        <Video size={40} aria-hidden="true" />
        <h2 id="recording-status">The recording is being prepared.</h2>
        <p>
          The video is not available yet. Save this page so you can return when
          it is ready.
        </p>
      </section>
      <p className="training-help">
        Need help? <a href="mailto:luis@freightskills.com">Contact Luis</a>.
      </p>
    </main>
  );
}
