import { ArrowRight } from 'lucide-react';
import { getWebinarRegistration } from '@/lib/webinar';

export function WebinarRegistrationForm() {
  const settings = getWebinarRegistration();
  const ready = Boolean(settings);
  return (
    <aside
      className="webinar-form-card"
      id="webinar-registration"
      tabIndex={-1}
      aria-labelledby="webinar-form-title"
    >
      <h2 id="webinar-form-title">Get the free training.</h2>
      <p className="webinar-form-intro">
        Register for the webinar with Luis Uribe.
      </p>
      <form
        action={settings?.action}
        method="post"
        aria-describedby="webinar-registration-note"
      >
        {settings &&
          Object.entries(settings.hiddenFields).map(([name, value]) => (
            <input type="hidden" key={name} name={name} value={value} />
          ))}
        <label htmlFor="webinar-firstname">
          First name <span>(optional)</span>
        </label>
        <input
          id="webinar-firstname"
          name="firstname"
          autoComplete="given-name"
          placeholder="Your first name"
          disabled={!ready}
        />
        <label htmlFor="webinar-email">Email address</label>
        <input
          id="webinar-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          disabled={!ready}
        />
        {settings && (
          <p className="webinar-consent">
            {settings.consentText}{' '}
            <a href={settings.privacyUrl}>Privacy policy</a>
          </p>
        )}
        <button
          className="button webinar-submit"
          type="submit"
          disabled={!ready}
        >
          Access the free training <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="webinar-form-detail">
          Free training · No payment required
        </p>
      </form>
      <p className="webinar-registration-note" id="webinar-registration-note">
        {ready
          ? 'Follow the confirmation instructions after submitting your registration.'
          : 'Preview only. Registration and webinar access are not connected yet. This form does not collect information.'}
      </p>
    </aside>
  );
}
