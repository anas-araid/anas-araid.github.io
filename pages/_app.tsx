import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import * as ga from '../lib/ga';
import { DocumentHead } from '../components/DocumentHead';
import { ThemeProvider } from '../providers';
import { Root } from '../containers/Root';

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DocumentHead />
      <ThemeProvider>
        <Root pageProps={pageProps} Component={Component} router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
