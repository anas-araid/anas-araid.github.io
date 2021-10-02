import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useDarkMode() {
  const [isDark, setDarkMode] = useState<string>();

  useEffect(() => {
    if (isDark === undefined && localStorage.isDark === undefined) {
      console.log('primo if');
      localStorage.setItem('isDark', 'true');
      setDarkMode(localStorage.isDark);
      return;
    }

    if (isDark !== undefined) {
      localStorage.setItem('isDark', isDark);
    }
    setDarkMode(localStorage.isDark);
  }, [isDark]);

  return [isDark, setDarkMode] as const;
}
