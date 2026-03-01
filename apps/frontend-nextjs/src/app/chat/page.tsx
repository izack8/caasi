'use client'

import MotionWrapper from '@/components/ui/MotionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import AIResumeChatSection from '@/components/sections/AIResumeChatSection';

export default function ChatPage() {
  return (
    <MotionWrapper id="chat"
    >
      <PageHeader 
        title="🤖 ai chatbot" 
        subtitle={`mandatory ai implementation. "omg AI!" - someone, probably. (lowkey not proud of this one)`}
      />
      (it's kinda broken now, cause i ran out of credits)
      <div className="w-full h-[60dvh] bg-slate-200">
        <AIResumeChatSection />
      </div>
    </MotionWrapper>
  );
}
