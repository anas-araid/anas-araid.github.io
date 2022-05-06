import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Root } from '../features/root';
import * as ga from '../lib/analytics';
import { ThemeProvider } from '../providers';
import { store } from '../store';
import '../styles/globals.css';

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
