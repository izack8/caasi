import PageHeader from '../components/ui/PageHeader';
import AIResumeChatSection from '../components/sections/AIResumeChatSection';
import Footer from '../components/ui/Footer';

function ChatPage() {
  return (
    <div id="chat" className="lg:h-auto h-[99dvh]">
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
    </div>
  );
}

export default ChatPage;
