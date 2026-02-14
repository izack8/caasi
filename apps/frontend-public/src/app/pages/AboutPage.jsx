import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import Footer from '../components/ui/Footer';

function AboutPage() {
  return (
    <AnimatePresence mode="wait">
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

export default AboutPage;
