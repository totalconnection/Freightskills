'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowUpRight, Play } from 'lucide-react';
import { topics } from '@/lib/topics';
type Lesson = {
  id: string;
  title: string;
  url: string;
  topic: string;
  articleSlug: string;
  articleTitle: string;
};
export function VideoLibrary({ videos }: { videos: Lesson[] }) {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('all');
  const results = videos.filter(
    (v) =>
      (topic === 'all' || v.topic === topic) &&
      `${v.title} ${v.articleTitle} ${v.topic}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="library-controls">
        <div className="search-field">
          <Search size={20} />
          <label className="sr-only" htmlFor="video-search">
            Search video lessons
          </label>
          <input
            id="video-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a lesson or freight topic"
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
        {results.length} video {results.length === 1 ? 'lesson' : 'lessons'}
      </p>
      <div className="video-directory">
        {results.map((v) => (
          <article key={v.id} className="video-directory-item">
            <a
              className="lesson-thumbnail"
              href={v.url}
              aria-label={`Watch ${v.title} on YouTube`}
            >
              <img
                src="/images/freight-terminal.webp"
                width="480"
                height="360"
                loading="lazy"
                alt=""
              />
              <span>
                <Play size={22} fill="currentColor" />
              </span>
            </a>
            <div>
              <p className="micro">
                {topics.find((t) => t.slug === v.topic)?.title} · Luis Uribe
              </p>
              <h2>
                <a href={v.url}>{v.title}</a>
              </h2>
              <Link className="text-link" href={`/blog/${v.articleSlug}`}>
                Read: {v.articleTitle} <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>No matching lessons.</h2>
          <p>Try another phrase or topic.</p>
          <button
            className="button"
            onClick={() => {
              setQuery('');
              setTopic('all');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
