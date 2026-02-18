'use client';

import { useEffect } from 'react';

export default function DisableBfCache() {
  useEffect(() => {
    // Disable back-forward cache
    window.addEventListener('beforeunload', () => {});
    
    // Force page reload on navigation
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    });
    
    return () => {
      window.removeEventListener('beforeunload', () => {});
      window.removeEventListener('pageshow', () => {});
    };
  }, []);

  return null;
}
