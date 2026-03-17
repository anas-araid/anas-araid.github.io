import { AppProps } from 'next/app';
import { useEffect, useLayoutEffect, useState } from 'react';
import { KBarContent } from '../../components/kbar/kbar-content';
import { useThemeContext } from '../../hooks/useThemeContext';
import { CmdkContext } from '../../contexts/cmdk-context';
import { Layout } from '../layout';

const Root = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { theme } = useThemeContext();
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    document.body.className = `transition-all h-screen duration-300 ${theme.backgroundColor} ${theme.textColor}`;
  }, [theme]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }

      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if ((e.target as HTMLElement).tagName === 'INPUT') return;

      switch (e.key.toLowerCase()) {
        case 'h': router.push('/'); break;
        case 'a': router.push('/about'); break;
        case 'c': router.push('/cv'); break;
        case 'l': router.push('/links'); break;
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [router]);

  return (
    <CmdkContext.Provider value={{ open, setOpen }}>
      <KBarContent />
      <Layout pageProps={pageProps} Component={Component} router={router} />
    </CmdkContext.Provider>
  );
};

export default Root;
