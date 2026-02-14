import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import AIResumeChatSection from '../components/sections/AIResumeChatSection';
import Footer from '../components/ui/Footer';

function ChatPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="chat"
        key="chat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <PageHeader 
          title="ai chatbot" 
          subtitle={`mandatory ai implementation. "omg AI!" - someone, probably. (lowkey not proud of this one)`}
        />
        (it's kinda broken now, cause i ran out of credits)
        <div className="w-full h-[450px] bg-slate-200">
          <AIResumeChatSection />
        </div>
        
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

export default ChatPage;
