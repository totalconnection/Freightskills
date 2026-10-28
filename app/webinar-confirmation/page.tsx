import Link from 'next/link';
import { ArrowRight, Video } from 'lucide-react';
import { metadata as meta } from '@/lib/config';
export const metadata = {
  ...meta(
    'Your registration is confirmed.',
    'Free Freightskills training with Luis Uribe.',
    '/webinar-confirmation',
  ),
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main id="main" className="wrap training-flow">
      <p className="section-label">FREE TRAINING</p>
      <h1>Your registration is confirmed.</h1>
      <p>
        Thanks for registering for the free Freightskills training with Luis
        Uribe.
      </p>
      <p>
        Check your inbox for a confirmation email with your training-page link.
        If it does not arrive within a few minutes, check your spam folder.
      </p>
      <div className="training-status">
        <strong>The recording is being prepared.</strong>
        <p>
          You can open the training page now and save the link for later. The
          video is not available yet.
        </p>
      </div>
      <Link className="button" href="/webinar-watch">
        Open the training page <ArrowRight size={18} aria-hidden="true" />
      </Link>
      <p className="training-help">
        Entered the wrong email?{' '}
        <Link href="/webinar-register">Register again</Link>. Need help?{' '}
        <a href="mailto:luis@freightskills.com">Contact Luis</a>.
      </p>
    </main>
  );
}
