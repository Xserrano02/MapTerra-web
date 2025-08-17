'use client';
import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function FbPixelListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const first = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.fbq) return;

    if (first.current) {
      first.current = false;
      return;
    }
    window.fbq('track', 'PageView');
  }, [pathname, searchParams]);

  return null;
}
