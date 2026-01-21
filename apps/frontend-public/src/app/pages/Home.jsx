import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import JourneySection from '../components/sections/JourneySection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import WritingSection from '../components/sections/WritingSection';
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

  const [activeTab, setActiveTab] = useState('work');

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
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 py-12 lg:py-0">
        <div className="w-full flex flex-wrap lg:flex-nowrap lg:gap-x-6">
        <AnimatePresence mode="wait">
          <motion.header
            key="header"
            initial={{ opacity: 0, x: 0 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} 
            className="flex flex-col w-full lg:h-[99dvh] lg:sticky top-0 lg:w-[40%] pt-20 lg:py-24 lg:justify-between"
          >
            {/* Left Side */}
            <div className="h-full">
              <HeroTitle />
              <ShortDesc />
              
              <div className="">
              <ConnectWithMe />
              </div>
            </div>
            <div className="hidden lg:block">
              <Footer />
            </div>
          </motion.header>
        </AnimatePresence>
          
           {/* Right side - main content */}
          <main className="w-full lg:w-[60%] pt-20 lg:py-15 sm:py-16 text-slate-350 text-sm lg:text-base flex flex-col lg:flex-wrap lg:block">
            <div className="relative">
              <div className="flex flex-row lg:justify-end justify-center w-full pointer-events-auto" >
                <Tabs activeTab={activeTab} onTabClick={handleTabChange} />
              </div>
              <div className="pt-10">
                <AnimatePresence mode="wait">
                  {activeTab === 'work' && (
                    <motion.div
                      key="work"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className='lg:mt-20 lg:mb-40'>
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