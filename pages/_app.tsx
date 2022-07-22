import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Root } from '../features/root';
import * as ga from '../lib/analytics';
import { ThemeProvider } from '../providers';
import { store } from '../store';
import '../styles/globals.css';
import Head from 'next/head'

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
    <>
      <Head>
        <title>Anas Araid</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='theme-color' content='#000000' />
        <meta name='title' content='Anas Araid' />
        <meta name='description' content='Mostly a developer, occasionally a firefighter, definitely not a designer.' />
        <meta name='author' content='Anas Araid' />
        <meta name='keywords' content='portfolio, anas, araid' />

        <link rel='icon' href='favicon.svg' sizes='any' type='image/svg+xml' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://anasaraid.me/' />
        <meta property='og:title' content='Anas Araid' />
        <meta property='og:description' content='Mostly a developer, occasionally a firefighter, definitely not a designer.' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://anasaraid.me/' />
        <meta property='twitter:title' content='Anas Araid' />
        <meta property='twitter:description' content='Mostly a developer, occasionally a firefighter, definitely not a designer.' />

        {/* <link href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' /> */}

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider>
          <Root pageProps={pageProps} Component={Component} router={router} />
        </ThemeProvider>
      </Provider>    
    </>
  );
};

export default App;
