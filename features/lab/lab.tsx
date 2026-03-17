import { useRef, useEffect, useState } from 'react';
import { LAB_TWEETS, TweetData } from '../../constants/lab';

interface VideoCardProps extends TweetData {
  hoveredId: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const VideoCard = ({ thumbnail, videoUrl, url, id, hoveredId, onMouseEnter, onMouseLeave }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isDimmed = hoveredId !== null && hoveredId !== id;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`block overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${isDimmed ? 'opacity-20' : 'opacity-100'} ${hoveredId === id ? 'scale-[1.02] z-10' : 'scale-100'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={thumbnail}
        autoPlay
        muted
        loop
        playsInline
        preload='none'
        className='w-full object-cover'
      />
    </a>
  );
};

const Lab = (): JSX.Element => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sorted = [...LAB_TWEETS].sort((a, b) => a.order - b.order);
  const left = sorted.filter((_, i) => i % 2 === 0);
  const right = sorted.filter((_, i) => i % 2 !== 0);

  const renderCard = (tweet: TweetData) => (
    <VideoCard
      key={tweet.id}
      {...tweet}
      hoveredId={hoveredId}
      onMouseEnter={() => setHoveredId(tweet.id)}
      onMouseLeave={() => setHoveredId(null)}
    />
  );

  return (
    <div className='mt-20 mb-32'>
      <h1 className='text-2xl font-medium'>Experiments</h1>
      <p className='text-base mt-4 font-normal max-w-xl'>
        Mostly pixels, sometimes joy. Made with more care than necessary.
      </p>
      <div className='mt-12 hidden sm:grid grid-cols-2 gap-3 items-start'>
        <div className='flex flex-col gap-3'>{left.map(renderCard)}</div>
        <div className='flex flex-col gap-3'>{right.map(renderCard)}</div>
      </div>
      <div className='mt-12 sm:hidden flex flex-col gap-3'>
        {sorted.map(renderCard)}
      </div>
    </div>
  );
};

export default Lab;
