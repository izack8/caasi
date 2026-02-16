import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import Footer from '../components/ui/Footer';
import PostsSection from '../components/sections/PostsSection';

function WritingsPage() {
  return (
    <motion.div 
      id="writings" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PageHeader 
        title="digital scrapbook" 
        subtitle={`i sometimes try to form coherent thoughts and then write them down`}
      />
      
      <PostsSection />
      
    </motion.div>
  );
}

export default WritingsPage;