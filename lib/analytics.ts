export const OPEN_LINK_EVENT = 'open_link_event';
export const CLICK_EVENT = 'click_event';
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

type TParams = Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams | undefined;

export const captureEvent = (action: string, params?: TParams): void => {
  const env = process.env.NODE_ENV;

  if (env !== DEVELOPMENT) {
    window.gtag('event', action, params);
  }
};
