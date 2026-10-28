import { TrainingVideo } from '@/components/training-video';
import { Logo } from '@/components/site';
import { webinar } from '@/lib/webinar';
import { metadata as meta } from '@/lib/config';
export const metadata = {
  ...meta('Your free training.', 'Watch the free Freightskills training.', '/webinar-watch'),
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <div className="training-theater">
      <header className="training-theater-header">
        <Logo />
        <button className="button training-consult" type="button" disabled title="Booking will be available soon">Book a consult</button>
      </header>
      <main id="main" className="training-theater-main">
        <h1 className="sr-only">{webinar.title}</h1>
        <TrainingVideo id={webinar.video.id} hash={webinar.video.hash} title={webinar.title} />
      </main>
    </div>
  );
}
