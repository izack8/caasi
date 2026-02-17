import { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import AppSidebar from './ui/AppSidebar';
import Glow from './ui/Glow';
import Footer from './ui/Footer';

function Layout() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');

  // determine active tab from current route, (for UI display purposes)
  const path = location.pathname;
  useEffect(() => {
    if (path === '/') setActiveTab('home');
    else if (path === '/work') setActiveTab('work');
    else if (path === '/writings') setActiveTab('writings');
    else if (path === '/chat') setActiveTab('chat');
    else if (path === '/about') setActiveTab('about');
    else if (path === '/favorites') setActiveTab('favorites');
  }, [location.pathname]);
  
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
    <Glow />
    <div className="w-full lg:h-full lg:flex lg:flex-row lg:gap-x-8">
    
        <header className="flex flex-col w-full lg:w-[30%] lg:h-[99dvh] sticky top-0 lg:py-20 lg:px-0 z-10">
          <AppSidebar location={location} activeTab={activeTab} />
        </header>

        <main className="flex flex-col w-full min-h-screen lg:h-auto lg:w-[70%] lg:py-20 text-md lg:text-base gap-y-4 p-5 lg:px-0 z-0">
          <Outlet />
        </main>

        <footer className="lg:hidden items-end p-5">
            <Footer />
        </footer>

    </div>
    </>
  );
}

export default Layout;
