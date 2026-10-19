import sharp from 'sharp';
import fs from 'node:fs/promises';
await sharp('public/images/freight-terminal.png')
  .resize(1440, 810, { fit: 'cover' })
  .webp({ quality: 82 })
  .toFile('public/images/freight-terminal.webp');
await sharp('public/images/luis-uribe.png')
  .resize({ width: 727 })
  .webp({ quality: 85 })
  .toFile('public/images/luis-uribe.webp');
const line = '#368d85',
  pale = '#b4d4cc',
  ink = '#183641';
const drawings = {
  prospecting: `<g fill="none" stroke="${line}" stroke-width="2"><path d="M360 210L160 100M360 210L560 100M360 210L160 310M360 210L560 310"/><circle cx="360" cy="210" r="72" fill="${ink}"/><circle cx="160" cy="100" r="30" fill="${pale}"/><circle cx="560" cy="100" r="30" fill="${pale}"/><circle cx="160" cy="310" r="30" fill="${pale}"/><circle cx="560" cy="310" r="30" fill="${pale}"/></g><g fill="none" stroke="white" stroke-width="3"><circle cx="360" cy="195" r="18"/><path d="M326 241v-9q34-27 68 0v9"/></g>`,
  quoting: `<g stroke="${pale}" stroke-width="1"><path d="M110 95h500M110 165h500M110 235h500M110 305h500"/></g><g fill="${line}"><path d="M130 250h52v55h-52zM225 210h52v95h-52zM320 175h52v130h-52zM415 130h52v175h-52zM510 90h52v215h-52z"/></g><path d="M155 220L250 175L345 155L440 105L535 60" stroke="${ink}" fill="none" stroke-width="4"/><g fill="${ink}">${[155, 250, 345, 440, 535].map((x, i) => `<circle cx="${x}" cy="${[220, 175, 155, 105, 60][i]}" r="6"/>`).join('')}</g>`,
  carriers: `<g fill="${ink}"><rect x="125" y="125" width="310" height="135" rx="3"/><path d="M448 160h70l62 63v37H448z"/><circle cx="200" cy="280" r="25"/><circle cx="390" cy="280" r="25"/><circle cx="520" cy="280" r="25"/></g><path d="M465 175h42l35 41h-77z" fill="${pale}"/><circle cx="540" cy="110" r="58" fill="${line}" stroke="#eef3f1" stroke-width="9"/><path d="m515 109 17 18 33-35" stroke="white" stroke-width="7" fill="none"/>`,
  operations: `<path d="M120 200h480" stroke="${line}" stroke-width="3"/><g fill="${ink}" stroke="#eef3f1" stroke-width="12"><circle cx="140" cy="200" r="47"/><circle cx="360" cy="200" r="47"/><circle cx="580" cy="200" r="47"/></g><g stroke="white" stroke-width="3" fill="none"><path d="M123 180h34v40h-34zM132 191h16M132 200h16M132 209h10M342 185h27v28h-27zM369 193h10l8 10v10h-18M345 218h5M375 218h5m188-19 12 12 22-26"/></g><g stroke="${line}" stroke-width="2" fill="none"><path d="M140 270v40h220v-40M360 130V90h220v40"/></g>`,
};
for (const [name, body] of Object.entries(drawings)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="405" viewBox="0 0 720 405"><rect width="720" height="405" fill="#eef3f1"/>${body}</svg>`;
  await sharp(Buffer.from(svg))
    .webp({ quality: 85 })
    .toFile(`public/images/diagram-${name}.webp`);
}
const files = await fs.readdir('public/images');
for (const f of files.filter((f) => f.endsWith('.webp')))
  console.log(
    f,
    Math.round((await fs.stat('public/images/' + f)).size / 1024) + ' KB',
  );
