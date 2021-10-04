// log the pageview with their URL
export const pageview = (url: string): void => {
  const targetId: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '';
  window.gtag('config', targetId, {
    page_path: url,
  });
};

export const event = (action: string): void => {
  window.gtag('event', action);
};
