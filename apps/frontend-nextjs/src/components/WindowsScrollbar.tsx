
'use client';

import { useEffect } from 'react';

export default function WindowsScrollbar() {
  useEffect(() => {
    const isWindows = navigator.platform.toLowerCase().includes('win');
    if (isWindows) {
      document.documentElement.classList.add('windows');
      
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        document.documentElement.classList.add('scrolling');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          document.documentElement.classList.remove('scrolling');
        }, 1000);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  return null;
}