'use client';
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { ArticleCard } from './article-card';
import { topics } from '@/lib/topics';
import type { ArticleSummary } from '@/lib/posts';
export function LibrarySearch({ posts }: { posts: ArticleSummary[] }) {
  const [q, setQ] = useState('');
  const [topic, setTopic] = useState('all');
  const results = posts.filter(
    (p) =>
      (topic === 'all' || p.topic === topic) &&
      `${p.title} ${p.excerpt} ${p.category} ${p.searchIntent}`
        .toLowerCase()
        .includes(q.toLowerCase().trim()),
  );
  return (
    <>
      <div className="library-controls">
        <div className="search-field">
          <Search size={20} />
          <label className="sr-only" htmlFor="article-search">
            Search articles
          </label>
          <input
            id="article-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="What do you want to learn?"
          />
        </div>
        <label className="topic-select">
          Topic
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="all">All topics</option>
            {topics.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        {results.length} {results.length === 1 ? 'article' : 'articles'}
        {q && ` matching “${q}”`}
      </p>
      {results.length ? (
        <div className="blog-list">
          {results.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No matching articles.</h2>
          <p>Try a broader search or choose another topic.</p>
          <button
            className="button"
            onClick={() => {
              setQ('');
              setTopic('all');
            }}
          >
            Clear filters <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}
