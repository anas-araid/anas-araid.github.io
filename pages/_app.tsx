import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import * as ga from '../lib/analytics';
import { ThemeProvider } from '../providers';
import { Root } from '../containers/Root';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../store';

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

  useEffect(() => {
    console.log('👀 \n\n-> github.com/asdf1899');
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Root pageProps={pageProps} Component={Component} router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
