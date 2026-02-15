import { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTracker from './PageTracker';
import HeroTitle from './HeroTitle';
import ConnectWithMe from './ConnectWithMe';
import NavigationBar from './ui/NavigationBar';
import Footer from './ui/Footer';
import Glow from './ui/Glow';

function Layout() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('about');
  const [isNavSticky, setIsNavSticky] = useState(false);

  // determine active tab from current route, (for UI display purposes)
  const path = location.pathname;
  useEffect(() => {
    if (path === '/') setActiveTab('about');
    else if (path === '/work') setActiveTab('work');
    else if (path === '/writings') setActiveTab('writings');
    else if (path === '/chat') setActiveTab('chat');
  }, [location.pathname]);

  // when scroll to top of page switcher, make it sticky and add backdrop blur + bg color
  useEffect(() => {
    const getNavbarPosition = () => {
      const navBar = document.getElementById('page-switcher');
      if (navBar) {
        const rect = navBar.getBoundingClientRect();
        setIsNavSticky(rect.top <= 5);
      }
    };
    window.addEventListener('scroll', getNavbarPosition);

    return () => {
      window.removeEventListener('scroll', getNavbarPosition);
    };
  }, []);

  const topHeight = window.innerWidth < 1024 ? 280 : 0;
  
  useEffect(() => {
    window.scrollTo({ top: topHeight, behavior: 'smooth' });
  }, [location.pathname]);


  return (
    <>
      <Glow />
        <AnimatePresence mode="wait">
          <header className="flex flex-col w-full lg:w-[30%] lg:h-[99dvh] lg:sticky top-0 lg:py-20 pt-10 px-5 lg:px-0">
            <div className="flex hidden lg:block absolute top-[30px] h-[40px] items-center">
              <PageTracker pathname={location.pathname} />
            </div>
              
            <div
              className='flex flex-col h-full'
            >
              <HeroTitle />
              <ConnectWithMe />
              <div className="hidden lg:block">
                <NavigationBar activeTab={activeTab} />
              </div>

              <div className="hidden lg:block items-end mt-auto">
                <Footer />
              </div>
            </div>
          </header>

          {/* only shown (the nav bar) on mobile devices (smol screens) */}
          <motion.div
            id="page-switcher"
            key="page-switcher"
            className={`lg:hidden sticky top-0 z-10 transition-colors duration-200 px-5` + (isNavSticky ? ' backdrop-blur-md bg-white/40 px-0' : '')}
            initial={{ opacity: 0, x: 0 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <NavigationBar activeTab={activeTab} />
          </motion.div>
        </AnimatePresence>

      <main className="flex flex-col w-full min-h-screen lg:h-auto lg:w-[70%] lg:py-20 text-slate-350 text-md lg:text-base px-5 lg:px-0 gap-y-4 mt-5 lg:mt-0">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
