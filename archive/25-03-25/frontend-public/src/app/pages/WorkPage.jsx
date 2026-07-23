import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import TechStackSection from '../components/sections/TechStackSection';
import Footer from '../components/ui/Footer';

function WorkPage() {
  return (
    <motion.div 
      id="work" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PageHeader 
        title="leveling up & side quests" 
        subtitle="projects, skills, professional experiences, trying to build cool stuff, automate things, etc etc"
      />
      <ProjectsSection />
      <ExperiencesSection />
      <TechStackSection />
      
    </motion.div>
  );
}

export default WorkPage;
