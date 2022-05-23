import { captureEvent, OPEN_LINK_EVENT } from '../lib/analytics';

export const useTrackLink =
  () =>
  (url: string): void => {
    captureEvent(OPEN_LINK_EVENT, {
      event_label: url,
    });
    window.open(url, '_blank');
  };
