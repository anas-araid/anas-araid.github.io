import { FunctionComponent } from 'react';
import Head from 'next/head';

const DocumentHead: FunctionComponent = () => (
  <Head>
    <title>Anas Araid</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='theme-color' content='#fafafa' />
    <meta name='title' content='Anas Araid' />
    <meta name='description' content='Developer, designer and firefighter' />
    <meta name='author' content='Anas Araid' />
    <meta name='keywords' content='portfolio, bio, personal, projects' />

    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://anasaraid.me/' />
    <meta property='og:title' content='Anas Araid' />
    <meta property='og:description' content='Developer, designer and firefighter' />

    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content='https://anasaraid.me/' />
    <meta property='twitter:title' content='Anas Araid' />
    <meta property='twitter:description' content='Developer, designer and firefighter' />

    <link href='https://fonts.googleapis.com/css2?family=Inter' rel='stylesheet' />
  </Head>
);

export default DocumentHead;
