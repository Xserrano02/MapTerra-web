const KEY = 'mk_attribution';

export const readQuery = () => {
  if (typeof window === 'undefined') return {};
  return Object.fromEntries(new URLSearchParams(window.location.search));
};

export const getReferrer = () => {
  if (typeof document === 'undefined') return '';
  return document.referrer || '(direct)';
};

export const saveFirstTouch = () => {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem(KEY)) return;

  const q = readQuery();
  const payload = {
    utm_source: q.utm_source || '',
    utm_medium: q.utm_medium || '',
    utm_campaign: q.utm_campaign || '',
    utm_content: q.utm_content || '',
    utm_term: q.utm_term || '',
    referrer: getReferrer(),
    first_landing_path: window.location.pathname,
    ts: Date.now()
  };
  localStorage.setItem(KEY, JSON.stringify(payload));
};

export const getAttribution = () => {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
  catch { return {}; }
};
