import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import Footer from '../components/ui/Footer';

function AboutPage() {
  return (
    <motion.div 
      id="about" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PageHeader title="with ♥️," subtitle="from your local whimsy software engineer" />
      <AboutSection />
      
      <div className="flex lg:hidden mt-10 py-3">
        <Footer />
      </div>
    </motion.div>
  );
}

export default AboutPage;
