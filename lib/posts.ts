import prospecting from '@/content/articles/research-before-the-sales-call.json';
import quoting from '@/content/articles/how-freight-brokers-quote-rates.json';
import carriers from '@/content/articles/carrier-qualification-process.json';
import operations from '@/content/articles/after-you-get-a-freight-order.json';
import ltl from '@/content/articles/how-ltl-freight-moves.json';
import drayage from '@/content/articles/container-drayage-explained.json';
import { posts as legacy } from './legacy-posts';
import { isProduction } from './config';
export type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};
export type Post = {
  slug: string;
  title: string;
  category: string;
  topic: string;
  excerpt: string;
  cover: string;
  theme: string;
  videoId: string;
  sourceTitle: string;
  sourceId: string;
  minutes: number;
  takeaway: string;
  sections: Section[];
  approved: boolean;
  sources: { label: string; url: string }[];
  related: string[];
  reviewNotes?: string[];
};
const launch = [
  prospecting,
  quoting,
  carriers,
  operations,
  ltl,
  drayage,
] as Post[];
const archive: Post[] = legacy
  .filter((p) => !launch.some((n) => n.slug === p.slug))
  .map((p) => ({
    ...p,
    topic: 'operations',
    approved: false,
    sources: [],
    related: ['after-you-get-a-freight-order'],
  }));
export const allPosts = [...launch, ...archive];
export const posts = allPosts.filter((p) => !isProduction || p.approved);
export function readingMinutes(p: Post) {
  return Math.max(
    1,
    Math.ceil(
      p.sections.reduce(
        (sum, s) =>
          sum +
          s.paragraphs.join(' ').split(/\s+/).length +
          (s.bullets || []).join(' ').split(/\s+/).length,
        0,
      ) / 220,
    ),
  );
}
