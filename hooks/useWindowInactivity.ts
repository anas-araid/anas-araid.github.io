import { useEffect, useState } from 'react';

const DEFAULT_TIMER = 30000;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useWindowInactivity = (timer = DEFAULT_TIMER) => {
  const [inactive, setInactive] = useState(false);

  let time: NodeJS.Timeout;

  useEffect(() => {
    window.onload = resetTimer;
  }, []);

  const resetTimer = () => {
    clearTimeout(time);
    setInactive(false);

    time = setTimeout(() => setInactive(true), timer);
  };

  return { inactive, resetTimer } as const;
};
