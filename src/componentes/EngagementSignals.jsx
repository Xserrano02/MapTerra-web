'use client';
import { useEffect, useRef } from 'react';
import { track } from '../lib/fbpixel';

export default function EngagementSignals() {
  const scrolled50 = useRef(false);
  const sent30s = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (scrolled50.current) return;
      const h = document.documentElement;
      const scrolled = (h.scrollTop || document.body.scrollTop);
      const total = h.scrollHeight - h.clientHeight;
      if (total > 0 && scrolled / total >= 0.5) {
        scrolled50.current = true;
        track('ScrollDepth50', { page_path: window.location.pathname });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const timer = setTimeout(() => {
      if (!sent30s.current) {
        sent30s.current = true;
        track('Engaged30s', { page_path: window.location.pathname });
      }
    }, 30000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
