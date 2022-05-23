import { useEffect, useState } from 'react';

const DEFAULT_TIMER = 45000;

export const useWindowInactivity = (timer = DEFAULT_TIMER): boolean => {
  const [inactive, setInactive] = useState(false);

  let time: NodeJS.Timeout;

  useEffect(() => {
    window.onload = resetTimer;

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach((name) => {
      document.addEventListener(name, resetTimer, true);
    });
  }, []);

  const resetTimer = () => {
    clearTimeout(time);
    setInactive(false);

    time = setTimeout(() => setInactive(true), timer);
  };

  return inactive;
};
