'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';

export function TrainingVideo({ id, hash, title }: { id: string; hash: string; title: string }) {
  const [active, setActive] = useState(false);
  return <div className="video-frame training-recording">
    {active ? <iframe
      src={`https://player.vimeo.com/video/${id}?h=${hash}&dnt=1&autoplay=1&title=0&byline=0&portrait=0`}
      title={title}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    /> : <button className="training-play" onClick={() => setActive(true)} aria-label={`Play training: ${title}`}>
      <Play size={42} aria-hidden="true" />
      <strong>Watch the free training</strong>
      <span>53 minutes</span>
      <small>Loads Vimeo, which receives device and visit information.</small>
    </button>}
  </div>;
}
