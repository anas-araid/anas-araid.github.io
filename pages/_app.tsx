import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Root } from '../features/root';
import * as ga from '../lib/analytics';
import { ThemeProvider } from '../providers';
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
    console.log('👀 \n\n-> github.com/anas-araid');
  }, []);

  return (
    <>
      <Head>
        <title>Anas Araid</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='theme-color' content='#000000' />
        <meta name='title' content='Anas Araid' />
        <meta name='description' content='building interfaces.' />
        <meta name='author' content='Anas Araid' />
        <meta name='keywords' content='portfolio, anas, araid' />

        <link rel='icon' href='favicon.svg' sizes='any' type='image/svg+xml' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://anasaraid.me/' />
        <meta property='og:title' content='Anas Araid' />
        <meta property='og:description' content='building interfaces.' />
        <meta property="og:image" content="https://anasaraid.me/og.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://anasaraid.me/' />
        <meta property='twitter:title' content='Anas Araid' />
        <meta property='twitter:description' content='building interfaces.' />

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
      <ThemeProvider>
        <Root pageProps={pageProps} Component={Component} router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
