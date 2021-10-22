import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useDarkMode() {
  const [isDark, setDark] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('isDark')) {
      setDark(localStorage.getItem('isDark') === 'true');
    }
  }, [isDark]);

  const setDarkMode = (value: boolean) => {
    localStorage.setItem('isDark', JSON.stringify(value));
    setDark(value);
  };

  return [isDark, setDarkMode] as const;
}
