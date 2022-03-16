import { useEffect, useState } from 'react';

export function useDarkMode(): readonly [boolean, (value: boolean) => void] {
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
