import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import Footer from '../components/ui/Footer';

function AboutPage() {
  return (
    <motion.div 
      id="about" 
      className="lg:h-auto h-[99dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PageHeader title="hey there" subtitle="thanks for visiting! please enjoy your stay <3" />
      <AboutSection />
      
      <div className="flex lg:hidden mt-10 py-3">
        <Footer />
      </div>
    </motion.div>
  );
}

export default AboutPage;
