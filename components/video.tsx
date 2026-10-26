'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
export function Video({ id, title }: { id: string; title: string; embedded?: boolean }) {
  const [active, setActive] = useState(false);
  return (
    <div className="video-frame">
      {active ? (
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
          data-video-src={`https://www.youtube-nocookie.com/embed/${id}`}
          onClick={() => setActive(true)}
          aria-label={`Load YouTube video: ${title}`}
        >
          <img
            src="/images/freight-terminal.webp"
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
            <span>Load YouTube video</span><span className="video-privacy-note">Loads YouTube, which receives device and visit information. Analytics permission is separate.</span>
          </span>
        </button>
      )}
    </div>
  );
}
