import { FunctionComponent } from 'react';
import Head from 'next/head';

const DocumentHead: FunctionComponent = () => (
  <Head>
    <title>Anas Araid</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='theme-color' content='#000000' />
    <meta name='title' content='Anas Araid' />
    <meta name='description' content='Mostly a developer, occasionally a firefighter, definitely not a designer.' />
    <meta name='author' content='Anas Araid' />
    <meta name='keywords' content='portfolio, bio, personal, projects' />

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
);

export default DocumentHead;
