'use client';

import { usePathname } from 'next/navigation';
import { memo } from 'react';
import Link from 'next/link';
import PageTracker from '@/components/PageTracker';
import HeroTitle from '@/components/HeroTitle';
import Footer from './Footer';

function AppSidebar() {
  const pathname = usePathname();

  // active tab directly from pathname, UI purposes
  const getActiveTab = (path: string) => {
    if (path === '/') return 'home';
    if (path === '/work' || path?.startsWith('/work/')) return 'work';
    if (path === '/writings' || path?.startsWith('/writings/')) return 'writings';
    if (path === '/chat') return 'chat';
    if (path === '/about') return 'about';
    if (path === '/favorites') return 'favorites';
    return 'home';
  };

  const activeTab = getActiveTab(pathname);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block">
        <div className="flex absolute top-[30px] h-[40px] items-center">
            <PageTracker pathname={pathname} />
        </div>
        <div className="lg:flex lg:flex-col lg:h-full">
          <div className='flex flex-col h-full'>
            <HeroTitle />
            <NavigationBar activeTab={activeTab} />
            <div className="hidden lg:block items-end mt-auto">
              <Footer />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 flex flex-row items-center bg-white/30 backdrop-blur-md h-[50px] p-5 z-50" style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}>
          <Link 
            href="/"
            className="font-semibold text-xl cursor-pointer transition-colors w-1/3"
          >  🎮&nbsp; Isaac</Link>
          <NavigationBar activeTab={activeTab} />
      </nav>
    </>
  );
};

const NavigationBar = memo(function NavigationBar({ activeTab }: { activeTab: string }) {
  
  const links = [
    { id: 'work', label: 'my work', emoji: '🧑‍💻', path: '/work' },
    { id: 'writings', label: 'my writing', emoji: '✍️', path: '/writings' },
    { id: 'chat', label: 'resumé chat', emoji: '🤖', path: '/chat' },
    { id: 'about', label: 'about me', emoji: '🎮', path: '/about' },
    { id: 'favorites', label: '', emoji: '🌻', path: '/favorites' },
  ];

  return (
    <div className="flex lg:justify-start justify-end lg:py-5 w-full items-center">
      <div className="flex flex-row lg:flex-col gap-6 lg:gap-3 lg:items-start">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className={`text-sm lg:text-md xl:text-base font-semibold relative pb-1 transition-colors duration-200 ${activeTab === link.id ? 'text-black' : 'text-gray-500'}`}
          >
            <span className="md:hidden">{link.emoji}</span>
            <span className="hidden md:inline">{link.emoji} {link.label}</span>
            <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 ${activeTab === link.id ? 'bg-black' : 'bg-transparent'}`}></span>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default AppSidebar;