import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import AIResumeChatSection from '../components/sections/AIResumeChatSection';
import Footer from '../components/ui/Footer';

function ChatPage() {
  return (
    <motion.div 
      id="chat" 
      className="lg:h-auto h-[99dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
      
      <div className="flex lg:hidden mt-10 py-3">
        <Footer />
      </div>
    </motion.div>
  );
}

export default ChatPage;
