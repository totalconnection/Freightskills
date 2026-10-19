import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Post } from '@/lib/posts';
import { readingMinutes } from '@/lib/posts';
export function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="article-card">
      <Link
        href={`/blog/${post.slug}`}
        className="article-image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={`/images/${['drayage', 'ltl'].includes(post.topic) ? 'freight-terminal' : 'diagram-' + post.topic}.webp`}
          alt=""
          width="720"
          height="405"
          loading="lazy"
        />
        <span className="image-tag">{post.category}</span>
      </Link>
      <div className="article-meta">
        <span>LUIS URIBE · {readingMinutes(post)} MIN READ</span>
        <ArrowUpRight size={17} />
      </div>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
    </article>
  );
}
