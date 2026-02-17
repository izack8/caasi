'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AppSidebar from "@/components/ui/AppSidebar";
import Glow from "@/components/ui/Glow";
import Footer from "@/components/ui/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');

  // Determine active tab from current route
  useEffect(() => {
    if (pathname === '/') setActiveTab('home');
    else if (pathname === '/work' || pathname?.startsWith('/work/')) setActiveTab('work');
    else if (pathname === '/writings' || pathname?.startsWith('/writings/')) setActiveTab('writings');
    else if (pathname === '/chat') setActiveTab('chat');
    else if (pathname === '/about') setActiveTab('about');
    else if (pathname === '/favorites') setActiveTab('favorites');
  }, [pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Windows scrollbar detection
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

  return (
    <>
      <Glow />
      <div className="mx-auto lg:min-h-screen max-w-screen-xl lg:px-12 h-screen lg:h-auto">
        <div className="w-full lg:h-full lg:flex lg:flex-row lg:gap-x-8">

          <header className="flex flex-col w-full lg:w-[30%] lg:h-[99dvh] sticky top-0 lg:py-20 lg:px-0 z-50">
            <AppSidebar pathname={pathname} activeTab={activeTab} />
          </header>

          <main className="flex flex-col w-full min-h-screen lg:h-auto lg:w-[70%] lg:py-20 text-md lg:text-base gap-y-4 p-5 lg:px-0 z-0">
            {children}
          </main>

          <footer className="lg:hidden items-end p-5">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
