import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import JourneySection from '../components/sections/JourneySection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import WritingSection from '../components/sections/WritingSection';
import HeroTitle from '../components/HeroTitle';
import ShortDesc from '../components/ShortDesc';
import TechStack from '../components/TechStack';
import ConnectWithMe from '../components/ConnectWithMe';
import Tabs from '../components/Tabs';
import Footer from '../components/ui/Footer';
import Glow from '../components/ui/Glow';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom';

// ...existing imports...

function Home() {
  const location = useLocation();
  const initialTab = location.state?.tab || 'work';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (newTab) => {
      if (newTab === activeTab) return;
      
      setIsTransitioning(true);
      
      setTimeout(() => {
          setActiveTab(newTab);
          setIsTransitioning(false);
      }, 150);
  };

  return (
    <>
      <Glow />
      <main className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <section className="w-full flex flex-wrap lg:flex-nowrap ">
          {/* Left side - sticky header that never moves */}
          <header className="w-full lg:h-[99dvh] lg:sticky top-0 lg:w-[45%] pt-20 sm:pt-32 lg:py-24 lg:pr-15 flex flex-col lg:justify-between">
            <div>
              <HeroTitle />
              <ShortDesc />
              <TechStack />
              <ConnectWithMe />
            </div>
            <div className="hidden lg:block">
              <Footer />
            </div>
          </header>
          
           {/* Right side - main content */}
          <main className="w-full lg:w-[55%] pt-20 lg:py-26 sm:pt-16 text-slate-350 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base lg:pt-20 flex flex-col lg:flex-wrap lg:block pb-20 overflow-y-scroll">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full z-10 pb-4 pointer-events-auto" >
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
                      <AboutSection />
                      <ExperiencesSection />
                      <ProjectsSection />
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
                </AnimatePresence>
                </div>
            </div>
            <div className="lg:hidden">
              <Footer />
            </div>
          </main>
        </section>
      </main>
    </>
  );
}

export default Home;