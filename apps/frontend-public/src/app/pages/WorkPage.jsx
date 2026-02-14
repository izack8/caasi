import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import TechStackSection from '../components/sections/TechStackSection';
import Footer from '../components/ui/Footer';

function WorkPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="work"
        key="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <PageHeader 
          title="leveling up & side quests" 
          subtitle="skills, professional experiences, trying to build cool stuff, automate things, etc etc"
        />
        <ProjectsSection />
        <ExperiencesSection />
        <TechStackSection />
        
        <motion.div className="flex lg:hidden mt-10 py-3"
          key="footer-mobile"
          initial={{ opacity: 0, x: 0 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default WorkPage;
