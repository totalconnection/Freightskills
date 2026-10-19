import { articleCatalog } from '@/content/article-index';
import { isProduction } from './config';
import { readingMinutes } from './article-utils';
export { readingMinutes } from './article-utils';
export type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};
export type Post = {
  seoTitle: string;
  searchIntent: string;
  videos: { sourceId: string; id: string; title: string; url: string }[];
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

export const allPosts = articleCatalog as Post[];
export const posts = allPosts.filter((p) => !isProduction || p.approved);
export type ArticleSummary = Pick<
  Post,
  'slug' | 'title' | 'topic' | 'category' | 'excerpt' | 'searchIntent'
> & { minutes: number };
export function summarizePost(p: Post): ArticleSummary {
  return {
    slug: p.slug,
    title: p.title,
    topic: p.topic,
    category: p.category,
    excerpt: p.excerpt,
    searchIntent: p.searchIntent,
    minutes: readingMinutes(p),
  };
}
