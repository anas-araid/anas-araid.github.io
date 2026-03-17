import { useEffect, useState } from 'react';

export function useDarkMode(): readonly [boolean, (value: boolean) => void] {
  const [isDark, setDark] = useState<boolean>(true);

  useEffect(() => {
    const stored = localStorage.getItem('isDark');
    setDark(stored === null ? true : stored === 'true');
  }, []);

  const setDarkMode = (value: boolean) => {
    localStorage.setItem('isDark', JSON.stringify(value));
    setDark(value);
  };

  return [isDark, setDarkMode] as const;
}
