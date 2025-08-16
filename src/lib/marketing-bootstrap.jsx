'use client';
import { useEffect } from 'react';
import { saveFirstTouch } from '@/lib/attribution';

export default function MarketingBootstrap() {
  useEffect(() => {
    saveFirstTouch();
  }, []);
  return null;
}
