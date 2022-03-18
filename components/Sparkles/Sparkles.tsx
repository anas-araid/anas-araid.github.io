import { FunctionComponent, Key, useState } from 'react';
import { range, generateSparkle, usePrefersReducedMotion, useRandomInterval } from './utils';

const DEFAULT_COLOR = '#FFC700';

interface ISparklesProps {
  color?: string;
}

const Sparkles: FunctionComponent<ISparklesProps> = ({ color = DEFAULT_COLOR, children, ...delegated }): JSX.Element => {
  const [sparkles, setSparkles] = useState(() => range(3).map(() => generateSparkle(color)));
  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp: { createdAt: number }) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );
  return (
    <span className='parent-sparkle-wrapper' {...delegated}>
      {sparkles.map((sparkle: { id: Key | null | undefined; color: string; size: number; style: { top: string; left: string } }) => (
        <Sparkle key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      ))}
      <span className='child-wrapper'>{children}</span>
    </span>
  );
};

interface ISparkleProps {
  size: number;
  color: string;
  style: { top: string; left: string };
}

const Sparkle = ({ size, color, style }: ISparkleProps) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

  return (
    <span className='sparkle-wrapper' style={style}>
      <svg className='sparkle-svg' width={size} height={size} viewBox='0 0 68 68' fill='none'>
        <path d={path} fill={color} />
      </svg>
    </span>
  );
};

export default Sparkles;
