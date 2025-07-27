import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import JourneySection from '../components/sections/JourneySection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import HeroTitle from '../components/HeroTitle';
import ShortDesc from '../components/ShortDesc';
import TechStack from '../components/TechStack';
import ConnectWithMe from '../components/ConnectWithMe';
import Footer from '../components/ui/Footer';
import Glow from '../components/ui/Glow';
// ...existing imports...

function Home() {
  
  return (
    <>
      
      <Glow />
      
      <main className="w-full min-h-screen px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60">
        <section className="w-full flex flex-wrap">
          
          {/* Left side - STICKY header that never moves */}
          <header className="w-full lg:h-[95dvh] lg:sticky top-0 lg:w-1/2 pt-20 sm:pt-32 lg:pt-27 lg:pb-40 lg:pr-20 flex flex-col lg:justify-between">
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

          <main className="w-full lg:w-1/2 px-0 sm:px-0 lg:px-4 pt-20 sm:pt-16 lg:pt-27 text-slate-350 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base flex flex-wrap lg:block pb-20">
            <div className="">
              <AboutSection />
              <ExperiencesSection />
              <ProjectsSection />
              <JourneySection />
            </div>

            <div className="lg:hidden">
              <Footer />
            </div>
          </main>
          
        </section>
      </main>
    </>
  );
}

export default Home;