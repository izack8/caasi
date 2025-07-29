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
      
      <main className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <section className="w-full flex flex-wrap lg:flex-nowrap ">
          
          {/* Left side - STICKY header that never moves */}
          <header className="w-full lg:h-[99dvh] lg:sticky top-0 lg:w-[45%] 
          pt-20 sm:pt-32 lg:py-24 lg:pr-15 flex flex-col lg:justify-between">
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

          <main className="w-full lg:w-[55%] pt-24 lg:py-26 sm:pt-16 
          text-slate-350 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base lg:pt-24
          flex flex-wrap lg:block pb-20">
            <div>
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