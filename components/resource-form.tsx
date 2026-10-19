import { ArrowRight, LockKeyhole } from 'lucide-react';
import type { ResourceForm as FormSettings } from '@/lib/resource-forms';
export function ResourceForm({
  title,
  action,
  settings,
}: {
  title: string;
  action: string;
  settings: FormSettings | null;
}) {
  const ready = !!settings;
  return (
    <aside
      className="magnet-form-card"
      id="get-resource"
      aria-labelledby="resource-form-title"
    >
      <p className="eyebrow">YOUR FREE RESOURCE</p>
      <h2 id="resource-form-title">Get the {title}.</h2>
      <p className="magnet-form-intro">
        A practical reference for your next freight conversation.
      </p>
      <form
        action={ready ? settings.action : undefined}
        method="post"
        aria-describedby="delivery-note"
      >
        {settings &&
          Object.entries(settings.hiddenFields).map(([name, value]) => (
            <input type="hidden" key={name} name={name} value={value} />
          ))}
        <label htmlFor="resource-firstname">
          First name <span>(optional)</span>
        </label>
        <input
          id="resource-firstname"
          name="firstname"
          autoComplete="given-name"
          placeholder="Your first name"
          disabled={!ready}
        />
        <label htmlFor="resource-email">Email address</label>
        <input
          id="resource-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          disabled={!ready}
        />
        <button
          className="button magnet-submit"
          type="submit"
          disabled={!ready}
        >
          {action}
          <ArrowRight size={18} />
        </button>
        <p className="magnet-consent">
          <LockKeyhole size={13} aria-hidden="true" />
          Request this resource by email. No payment required.
        </p>
      </form>
      <p
        id="delivery-note"
        className={ready ? 'magnet-delivery-note' : 'magnet-preview-note'}
      >
        {ready
          ? 'Follow the confirmation instructions after submitting your request.'
          : 'Design preview · Email signup and resource delivery are not connected yet. No information is collected here.'}
      </p>
    </aside>
  );
}
