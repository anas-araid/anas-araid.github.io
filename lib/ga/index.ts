const DEVELOPMENT = 'development';

// log the pageview with their URL
export const pageview = (url: string): void => {
  const env = process.env.NODE_ENV;
  const targetId: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '';

  if (env !== DEVELOPMENT) {
    window.gtag('config', targetId, {
      page_path: url,
    });
  }
};

export const event = (action: string): void => {
  window.gtag('event', action);
};
