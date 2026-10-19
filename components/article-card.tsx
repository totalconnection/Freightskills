import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Post, ArticleSummary } from '@/lib/posts';
import { readingMinutes, articleImage } from '@/lib/article-utils';
export function ArticleCard({ post }: { post: Post | ArticleSummary }) {
  return (
    <article className="article-card">
      <Link
        href={`/blog/${post.slug}`}
        className="article-image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={articleImage(post.topic)}
          alt=""
          width="720"
          height="405"
          loading="lazy"
        />
        <span className="image-tag">{post.category}</span>
      </Link>
      <div className="article-meta">
        <span>
          LUIS URIBE ·{' '}
          {'sections' in post ? readingMinutes(post) : post.minutes} MIN READ
        </span>
        <ArrowUpRight size={17} />
      </div>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
    </article>
  );
}
