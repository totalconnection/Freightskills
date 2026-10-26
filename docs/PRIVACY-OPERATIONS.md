# Privacy and security operations

Owner: Freightskills LLC, luis@freightskills.com. Effective October 26, 2026.

## Google setup

Google account: luis@freightskills.com. Analytics account 413475641; property 560826249; stream 16208059909; public measurement ID G-WHJ8GS37DV. A measurement ID and Search Console verification tag are public identifiers, not API keys.

Analytics loads only after optional consent. Ad storage, personalization, Google Signals, and user-provided data are disabled. User/event retention: two months, reset on activity off. Granular location/device collection is off. Page parameters, form names, emails, phone numbers, and message contents are not analytics payloads. Successful signups emit generate_lead; PDF links emit file_download. Rejecting cookies must never block a resource request.

## Monthly review

- Review failed resource delivery records older than 30 days and resolve or remove unnecessary data.
- Review public database requests older than 12 months; remove/anonymize only after checking consent evidence, support needs, and legal holds.
- Review subscribers inactive for 24 months using meaningful activity, not opens alone. Preserve minimum unsubscribe suppression records.
- Review closed/inactive portal accounts after 24 months while honoring continuing course entitlements. Review AI usage older than 12 months for deletion or aggregation.
- Review resolved support/privacy requests after 24 months.
- These reviews are manual. No automatic deletion or recurring task was installed.

## Privacy requests

1. Log receipt date, request type, applicable deadline, and responsible person. Avoid unnecessary sensitive documents.
2. Verify proportionately using the account email. Never request a password.
3. Search relevant systems: Cloudflare D1, ActiveCampaign, Railway/PostgreSQL/private storage, support email, and analytics where an identifier can be reasonably linked.
4. Check access entitlements, suppression needs, and legal holds before removal. Restrict retained exceptions and record the reason.
5. Respond within the applicable deadline, explaining exceptions and appeal rights. Reapply deletions/suppression after any backup restoration.

## Security maintenance

- Run npm audit and the production build before updates. This release uses explicit patched transitive versions; validate compatibility when changing overrides.
- Keep secrets in hosting/GitHub secret stores, never NEXT_PUBLIC variables, committed .env files, screenshots, logs, or analytics.
- Restrict provider access; use MFA and periodically review account administrators and deployment tokens.
- Verify backup schedules and perform a restore exercise in an isolated environment before relying on recovery. Backup retention/restore capability is not certified by this code audit.
- For an incident: restrict affected access, preserve relevant logs, rotate compromised secrets, assess affected people/data, and obtain advice on notification obligations.

## Legal review

The published notices describe inspected implementation and manual operating schedules. Counsel should confirm legal applicability, international transfer arrangements, consumer rights, tax retention, and business practices. This is not a legal compliance certification.
