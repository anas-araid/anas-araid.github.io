import { KBarProvider } from 'kbar';
import { AppProps } from 'next/app';
import { useLayoutEffect } from 'react';
import { KBarContent } from '../../components/kbar/KBarContent';
import { useThemeContext } from '../../hooks/useThemeContext';
import { Layout } from '../layout';

const Root = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { theme } = useThemeContext();

  useLayoutEffect(() => {
    document.body.className = `transition-all h-screen duration-300 ${theme.backgroundColor} ${theme.textColor}`;
  }, [theme]);

  return (
    <div>
      <KBarProvider
        actions={[]}
        options={{
          animations: {
            enterMs: 200,
            exitMs: 100,
          },
        }}
      >
        <KBarContent />
        <Layout pageProps={pageProps} Component={Component} router={router} />
      </KBarProvider>
    </div>
  );
};

export default Root;
