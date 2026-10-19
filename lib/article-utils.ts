import type { Post } from './posts';
export function readingMinutes(p: Pick<Post, 'sections'>) {
  return Math.max(
    1,
    Math.ceil(
      p.sections.reduce(
        (sum, s) =>
          sum +
          [...s.paragraphs, ...(s.bullets || [])].join(' ').split(/\s+/).length,
        0,
      ) / 220,
    ),
  );
}
export function articleImage(topic: string) {
  return `/images/${['ltl', 'drayage', 'business', 'growth'].includes(topic) ? 'freight-terminal' : 'diagram-' + topic}.webp`;
}
