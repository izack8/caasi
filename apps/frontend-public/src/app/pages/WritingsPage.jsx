import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import WritingSection from '../components/sections/WritingsSection';
import Footer from '../components/ui/Footer';

function WritingsPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="writings"
        key="writings"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <PageHeader 
          title="digital scrapbook" 
          subtitle="i sometimes try to form coherent thoughts and then write them down"
        />
        <WritingSection />
        
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

export default WritingsPage;
