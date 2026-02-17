import MotionWrapper from '@/components/ui/MotionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import PostsSection from '@/components/sections/PostsSection';

export default function WritingsPage() {
  return (
    <MotionWrapper id="writings">

      <PageHeader 
        title="digital scrapbook" 
        subtitle={`i sometimes try to form coherent thoughts and then write them down`}
      />
      <PostsSection />
      
    </MotionWrapper>
  );
}
