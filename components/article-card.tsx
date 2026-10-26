import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Post, ArticleSummary } from '@/lib/posts';
import { readingMinutes } from '@/lib/article-utils';
export function ArticleCard({ post }: { post: Post | ArticleSummary }) {
  return (
    <article className="article-card editorial-card">
      <p className="article-category">{post.category}</p>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title.replace(/\.$/, '')}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <div className="article-meta">
        <span>
          Luis Uribe ·{' '}
          {'sections' in post ? readingMinutes(post) : post.minutes} min read
        </span>
      </div>
      <Link
        className="article-read"
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title.replace(/\.$/, '')}`}
      >
        Read article <ArrowRight size={16} />
      </Link>
    </article>
  );
}
