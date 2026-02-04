import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
// import JourneySection from '../components/sections/JourneySection'; ill use this one day lmao
import ExperiencesSection from '../components/sections/ExperiencesSection';
import WritingSection from '../components/sections/WritingSection';
import PageTracker from '../components/PageTracker';
import HeroTitle from '../components/HeroTitle';
import PageHeader from '../components/ui/PageHeader';
import TechStackSection from '../components/sections/TechStackSection';
import AIResumeChatSection from '../components/sections/AIResumeChatSection';
import ConnectWithMe from '../components/ConnectWithMe';
import NavigationBar from '../components/ui/NavigationBar';
import Footer from '../components/ui/Footer';
import Glow from '../components/ui/Glow';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'


function Home() {

  const [activeTab, setActiveTab] = useState('about');
  const [isNavSticky, setIsNavSticky] = useState(false);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setActiveTab(newTab);
    sessionStorage.setItem('activeTab', newTab);
  };

  useEffect(() => {
    const savedTab = sessionStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }

    const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    const getNavbarPosition = () => {
      const navBar = document.getElementById('nav-bar');
      if (navBar) {
        const rect = navBar.getBoundingClientRect();
        setIsNavSticky(rect.top <= 5);
      }
    };
    window.addEventListener('scroll', getNavbarPosition);

    const handleScroll = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', getNavbarPosition);
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
      <Glow />
      <div className="mx-auto lg:min-h-screen max-w-screen-xl lg:px-12 h-screen lg:h-auto">
        <div className="w-full lg:h-full lg:flex lg:flex-row lg:gap-8">


          {/* Left/top Side - hero title */}
          <AnimatePresence mode="wait">
          <header className="flex flex-col w-full lg:w-[30%] lg:h-[99dvh] lg:sticky top-0 lg:py-20 pt-10 px-5 lg:px-0">

            <div className="hidden lg:block absolute top-10">
              <PageTracker />
            </div>
              
                <motion.div
                  key="left"
                  initial={{ opacity: 0, x: 0 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }} 
                  className='flex flex-col h-full'
                >
                
                  <HeroTitle />
                  <ConnectWithMe />
                  <div className="hidden lg:block">
                    <NavigationBar activeTab={activeTab} onTabClick={handleTabChange}/>
                  </div>

                  <div className="hidden lg:block items-end mt-auto">
                    <Footer />
                  </div>
              
                </motion.div>
            </header>

            {/* only shown (the nav bar) on mobile devices (smol screens) */}
            <motion.div 
            key="nav-bar"
            id="nav-bar" className={`lg:hidden sticky top-0 z-50 transition-colors duration-200 px-5` + (isNavSticky ? ' backdrop-blur-md bg-white/20 px-0' : '')}
              initial={{ opacity: 0, x: 0 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }} >
                  <NavigationBar activeTab={activeTab} onTabClick={handleTabChange}/>
              </motion.div>
          </AnimatePresence>

           {/* Right/bottom side - main content */}
          <main className="flex flex-col w-full lg:w-[70%] lg:py-20 text-slate-350 text-md lg:text-base px-5 lg:px-0">
              
              <div className="flex flex-col ">
                <AnimatePresence mode="wait">
                  {activeTab === 'about' && (
                    <motion.div
                      id="about"
                      key="about"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <PageHeader title="hey there" subtitle="thanks for visiting! please enjoy your stay <3" />
                      <AboutSection />
                      
                      
                      {/* <JourneySection /> */}
                    </motion.div>
                  )}
                  {activeTab === 'work' && (
                    <motion.div
                      id="work"
                      key="work"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <PageHeader title="leveling up & side quests" subtitle="skills, professional experiences, trying to build cool stuff, automate things, etc etc"/>
                      <ProjectsSection />
                      <ExperiencesSection />
                      <TechStackSection />
                    </motion.div>
                  )}
                  {activeTab === 'writing' && (
                    <motion.div
                      id="writing"
                      key="writing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <PageHeader title="digital scrapbook" subtitle={
                        <>
                        i sometimes try to form coherent thoughts and then write them down
                        </>
                    } />
                      <WritingSection />
                    </motion.div>
                  )}
                  {activeTab === 'chat' && (
                    <motion.div
                    id="chat"
                      key="chat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <PageHeader title="ai chatbot" subtitle={`mandatory ai implementation. "omg AI!" - someone, probably. (lowkey not proud of this one)`}/>
                       <div className="w-full h-[450px] bg-slate-200">
                        (it's kinda broken now, cause YALL MFs USED UP ALL MY CREDITS)
                        <AIResumeChatSection />
                    </div>
                    </motion.div>
                  )}

                <div
                  className="lg:hidden items-end mt-10">
                      <Footer />
                </div>

                </AnimatePresence>
                  
                </div>
          </main>

        </div>

       
      </div>
    </>
  );
}

export default Home;