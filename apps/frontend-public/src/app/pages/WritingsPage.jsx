import PageHeader from '../components/ui/PageHeader';
import Footer from '../components/ui/Footer';
import PostsSection from '../components/sections/PostsSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';

function WritingsPage() {
  return (
    <div id="writings" className="lg:h-auto h-[99dvh]">
      <PageHeader 
        title="digital scrapbook" 
        subtitle={`i sometimes try to form coherent thoughts and then write them down`}
      />
      <PostsSection />
      
      <div className="flex lg:hidden mt-10 py-3">
        <Footer />
      </div>
    </div>
  );
}

export default WritingsPage;