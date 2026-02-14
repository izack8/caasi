import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import Footer from '../components/ui/Footer';

function AboutPage() {
  return (
    <div id="about" className="lg:h-auto h-[99dvh]">
      <PageHeader title="hey there" subtitle="thanks for visiting! please enjoy your stay <3" />
      <AboutSection />
      
      <div className="flex lg:hidden mt-10 py-3">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
