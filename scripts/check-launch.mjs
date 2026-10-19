import fs from 'node:fs';
const errors = [];
const articles = fs
  .readdirSync('content/articles')
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync('content/articles/' + f, 'utf8')));
if (process.env.SITE_LAUNCH_APPROVED !== 'true')
  errors.push('Owner approval of finished production preview is required.');
if (!process.env.STUDENT_PORTAL_URL?.startsWith('https://'))
  errors.push('Verified HTTPS student portal destination is missing.');
for (const p of articles) {
  if (!p.approved) errors.push(`${p.slug}: article approval pending.`);
  if (
    /this draft|owner review|flagged for|before publication/i.test(
      p.sections.flatMap((s) => s.paragraphs).join(' '),
    )
  )
    errors.push(
      `${p.slug}: editorial-review language remains in article body.`,
    );
}
// Remove this gate only when the replacement implementation has been reviewed and tested.
errors.push(
  'Lead-magnet landing pages require confirmed resource files, verified ActiveCampaign forms, consent/privacy copy, and tested delivery before launch.',
);
if (errors.length) {
  console.error(
    'NOT READY FOR PRODUCTION\n' + errors.map((e) => '• ' + e).join('\n'),
  );
  process.exitCode = 1;
} else
  console.log(
    'Launch checks passed. Confirm deployed behavior after publication.',
  );
