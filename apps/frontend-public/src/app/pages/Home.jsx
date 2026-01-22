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
      <div className="mx-auto min-h-screen max-w-screen-xl lg:px-12 px-5 h-screen lg:h-auto">
        
        <div className="w-full h-full lg:flex lg:flex-row lg:gap-6">

          {/* Left/top Side - hero title */}
          <header className="flex flex-col w-full lg:w-[40%] lg:h-[100dvh] lg:sticky top-0 py-15">
            <div className="hidden lg:block">
              <PageTracker />
            </div>

        
              <AnimatePresence mode="wait">
                <motion.div
                  key="div"
                  initial={{ opacity: 0, x: 0 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }} 
                  className='flex flex-col h-full pt-10'
                >
                <HeroTitle />
                <ShortDesc />
                <ConnectWithMe />

                  <div className="hidden lg:block items-end mt-auto">
                    <Footer />
                  </div>
              
                </motion.div>
               
              </AnimatePresence>

        
          </header>
           {/* Right/bottom side - main content */}
          <main className="flex flex-col w-full lg:w-[60%] py-15 text-slate-350 text-sm lg:text-base">
            
              <div className="flex flex-row lg:justify-end justify-center w-full pointer-events-auto" >
                <Tabs activeTab={activeTab} onTabClick={handleTabChange} />
              </div>
              <div className="flex flex-col mt-10">
                <AnimatePresence mode="wait">
                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      
                        <AboutSection />
                      
                      
                      {/* <JourneySection /> */}
                    </motion.div>
                  )}
                  {activeTab === 'work' && (
                    <motion.div
                      key="work"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ExperiencesSection />
                      <TechStackSection />
                      <ProjectsSection />
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

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="lg:hidden items-end">
                      <Footer />
                </motion.div>

                </AnimatePresence>
                  
                </div>
          </main>

        </div>

       
      </div>
    </>
  );
}

export default Home;