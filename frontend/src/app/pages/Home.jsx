// import HelloSection from '../components/sections/HelloSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import JourneySection from '../components/sections/JourneySection';
import HeroTitle from '../components/HeroTitle';
import ShortDesc from '../components/ShortDesc';
import TechStack from '../components/TechStack';
import ConnectWithMe from '../components/ConnectWithMe';
import Footer from '../components/ui/Footer';

function Home() {
  return (
    <main className="w-full min-h-screen px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-80 pb-20 lg:pb-0">
      <section className="w-full flex flex-wrap">
        
        {/* Left side - STICKY header that never moves */}
        <header className="w-full lg:h-[100dvh] lg:sticky top-0 lg:w-1/2 pt-20 sm:pt-32 lg:pt-40 lg:pb-40 lg:pr-20 flex flex-col lg:justify-between">
          <div>
            <HeroTitle />
            <ShortDesc />
            <TechStack />
            <ConnectWithMe />
          </div>
          
          <div className="hidden lg:block">
            <Footer />
          </div>
        </header>

        <main className="w-full lg:w-1/2 px-0 sm:px-0 lg:px-4 pt-12 sm:pt-16 lg:pt-40 text-slate-350 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base flex flex-wrap lg:block lg:mb-40">
          <AboutSection />
          <ProjectsSection />
          <JourneySection />

          <div className="lg:hidden">
            <Footer />
          </div>

        </main>
        
      </section>
    </main>
  );
}

export default Home;