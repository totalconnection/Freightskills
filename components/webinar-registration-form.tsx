'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
export function WebinarRegistrationForm() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [busy, setBusy] = useState(false),
    [error, setError] = useState('');
  const request = useRef({ key: '', id: '' });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const data = new FormData(event.currentTarget);
    const details = {
      firstname: String(data.get('firstname') || '').trim(),
      email: String(data.get('email') || '').trim(),
      website: String(data.get('website') || ''),
    };
    const key = JSON.stringify(details);
    if (request.current.key !== key)
      request.current = { key, id: crypto.randomUUID() };
    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/training-registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...details, id: request.current.id }),
      });
      const result = (await response.json()) as {
        error?: string;
        thankYouUrl?: string;
      };
      if (response.status === 409) request.current = { key: '', id: '' };
      if (!response.ok)
        throw new Error(
          result.error || 'We could not register you. Please try again.',
        );
      if (result.thankYouUrl !== '/webinar-confirmation')
        throw new Error('Please try again in a moment.');
      window.location.assign(result.thankYouUrl);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Please try again.');
      setBusy(false);
    }
  }
  return (
    <aside
      className="webinar-form-card"
      id="webinar-registration"
      tabIndex={-1}
      aria-labelledby="webinar-form-title"
    >
      <h2 id="webinar-form-title">Register for the free training.</h2>
      <p className="webinar-form-intro">
        The recording is being prepared. Register now to receive a confirmation
        and a link to the training page.
      </p>
      <form
        onSubmit={submit}
        aria-busy={busy}
        aria-describedby="webinar-registration-note"
      >
        <label htmlFor="webinar-firstname">
          First name <span>(optional)</span>
        </label>
        <input
          id="webinar-firstname"
          name="firstname"
          autoComplete="given-name"
          maxLength={100}
          disabled={!ready || busy}
        />
        <label htmlFor="webinar-email">Email address</label>
        <input
          id="webinar-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          disabled={!ready || busy}
        />
        <label className="training-honeypot" aria-hidden="true">
          Leave this empty
          <input name="website" autoComplete="off" tabIndex={-1} />
        </label>
        <p className="webinar-consent">
          By registering, you request a confirmation email with your
          training-page link. <a href="/privacy">Privacy policy</a>
        </p>
        <button
          className="button webinar-submit"
          type="submit"
          disabled={!ready || busy}
        >
          {busy ? 'Registering…' : 'Send my training-page link'}{' '}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        {error && (
          <p role="alert" className="training-error">
            {error}
          </p>
        )}
      </form>
      <noscript>Please enable JavaScript to register.</noscript>
      <p className="webinar-registration-note" id="webinar-registration-note">
        Free registration · No payment required · Video coming soon
      </p>
    </aside>
  );
}
