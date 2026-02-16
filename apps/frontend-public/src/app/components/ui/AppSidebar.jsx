import { memo } from 'react';
import PageTracker from '../PageTracker';
import HeroTitle from '../HeroTitle';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";


const AppSidebar = memo(function AppSidebar({ location, activeTab }) {

  const navigate = useNavigate();

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:block">
        <div className="flex absolute top-[30px] h-[40px] items-center">
            <PageTracker pathname={location.pathname} />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:h-full">
            
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
      <nav className="lg:hidden flex flex-row items-center bg-white/30 backdrop-blur-md h-[50px] p-5 sticky top-0 z-50" style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', transform: 'translateZ(0)' }}>
          <span 
            className="font-semibold text-xl cursor-pointer transition-colors w-1/3"
            onClick={() => navigate('/')}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >  🎮&nbsp; Isaac</span>
          <NavigationBar activeTab={activeTab} />
      </nav>
    </>
  );
});

function NavigationBar({ activeTab }) {

  const navigate = useNavigate();
  
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
          <button
            key={link.id}
            className={`text-sm lg:text-md xl:text-base font-semibold relative pb-1 transition-colors duration-200 ${activeTab === link.id ? 'text-black' : 'text-gray-500'}`}
            onClick={() => navigate(link.path)}
            style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
          >
            <span className="md:hidden">{link.emoji}</span>
            <span className="hidden md:inline">{link.emoji} {link.label}</span>
            <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 ${activeTab === link.id ? 'bg-black' : 'bg-transparent'}`}></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppSidebar;