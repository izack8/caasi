// import HelloSection from '../components/sections/HelloSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import HeroTitle from '../components/HeroTitle';
import ShortDesc from '../components/ShortDesc';

function Home() {
  return (
    <main className="w-full min-h-screen px-4 sm:px-20 xl:px-40 2xl:px-80">
      <section className="w-full flex flex-wrap">
        
        {/* Left side - STICKY header that never moves */}
        <header className="w-full lg:h-[100dvh] lg:sticky top-0 lg:w-1/2 pt-40 lg:pb-40 flex flex-col lg:justify-between">
          <div>
            <HeroTitle />
            <ShortDesc />
          </div>
          <div>
            {/* Footer content for left side */}
          </div>
        </header>

        {/* Right side - Scrollable content */}
        <main className="w-full lg:w-1/2 px-4 sm:px-0 pt-20 lg:pt-40 text-slate-350 text-sm flex flex-wrap justify-center lg:block lg:mb-40">
          <AboutSection />
          <ProjectsSection />
          {/* All your scrollable content goes here */}
        </main>
        
      </section>
    </main>
  );
}

export default Home;