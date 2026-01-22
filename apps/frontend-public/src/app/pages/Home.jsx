import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import JourneySection from '../components/sections/JourneySection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import WritingSection from '../components/sections/WritingSection';
import PageTracker from '../components/PageTracker';
import HeroTitle from '../components/HeroTitle';
import ShortDesc from '../components/ShortDesc';
import TechStackSection from '../components/sections/TechStackSection';
import ConnectWithMe from '../components/ConnectWithMe';
import Tabs from '../components/Tabs';
import Footer from '../components/ui/Footer';
import Glow from '../components/ui/Glow';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'


function Home() {

  const [activeTab, setActiveTab] = useState('about');

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
  }, []);

  return (
    <>
      <Glow />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:py-0">
        <div className="w-full flex flex-wrap lg:flex-nowrap lg:gap-x-6">
          <div className="flex flex-col w-full lg:h-[99dvh] lg:sticky top-0 lg:w-[40%] py-15">
            <div className="hidden lg:block">
              <PageTracker />
            </div>

        {/* Left Side */}
        <div className="h-full lg:pt-10 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.header
              key="header"
              initial={{ opacity: 0, x: 0 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} 
              className='flex flex-col h-full'
            >
                <HeroTitle />
                <ShortDesc />
                <ConnectWithMe />

                <div className="justify-items-center lg:hidden mt-6">
                  <PageTracker />
                </div>

                <div className="hidden lg:block items-end mt-auto">
                  <Footer />
                </div>
            
              </motion.header>
             
            </AnimatePresence>
          </div>
        
        </div>
           {/* Right side - main content */}
          <main className="w-full lg:w-[60%] py-15 text-slate-350 text-sm lg:text-base flex flex-col lg:flex-wrap lg:block">
            <div className="relative">
              <div className="flex flex-row lg:justify-end justify-center w-full pointer-events-auto" >
                <Tabs activeTab={activeTab} onTabClick={handleTabChange} />
              </div>
              <div className="pt-10">
                <AnimatePresence mode="wait">
                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className='lg:mb-50'>
                        <AboutSection />
                      </div>
                      
                      <ExperiencesSection />
                      <ProjectsSection />
                      <TechStackSection />
                      <JourneySection />
                    </motion.div>
                  )}
                  {activeTab === 'writing' && (
                    <motion.div
                      key="writing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <WritingSection />
                    </motion.div>
                  )}
                  {activeTab === 'chat' && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                       <div className="w-full h-[500px] bg-slate-200 my-10">
                      <iframe
                        src="https://ask-your-pdf-production.up.railway.app?embed=true"
                        title="Ask Your PDF App"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
            </div>
            <div className="lg:hidden">
              <Footer />
            </div>
          </main>
        </div>

       
      </main>
    </>
  );
}

export default Home;