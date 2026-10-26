'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
export function Video({ id, title, embedded = false }: { id: string; title: string; embedded?: boolean }) {
  const [active, setActive] = useState(false);
  return (
    <div className="video-frame">
      {active || embedded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}${active ? '?autoplay=1' : ''}`}
          loading="lazy"
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          className="video-poster"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            loading="lazy"
            width="1440"
            height="810"
            alt=""
          />
          <span className="video-shade" />
          <span className="video-play">
            <Play size={26} fill="currentColor" />
          </span>
          <span className="video-caption">
            <small>THE ORIGINAL LESSON / LUIS URIBE</small>
            <strong>{title}</strong>
            <span>Watch the video ↗</span>
          </span>
        </button>
      )}
    </div>
  );
}
