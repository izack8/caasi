import { useEffect } from 'react';

export function useScrollbarFade() {
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Add scrolling class
      document.body.classList.add('scrolling');
      document.body.classList.remove('scroll-fade');
      
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set timeout to hide scrollbar after scrolling stops
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
        document.body.classList.add('scroll-fade');
      }, 300); // Hide after 300ms of no scrolling
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize as faded
    document.body.classList.add('scroll-fade');

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
}