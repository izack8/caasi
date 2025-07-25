import HelloSection from '../components/sections/HelloSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';

function Home() {
  return (
    <section className="w-full flex flex-col lg:flex-row relative">
  {/* Left side - Fixed on desktop, stacked on mobile */}
  <header className="w-full lg:h-[100dvh] lg:sticky top-0 lg:w-1/2 pt-40 lg:pb-40 flex flex-col lg:justify-between">
    <HelloSection />
  </header>

  {/* Right side - offset on desktop to avoid going under fixed left */}
  <main className="w-full lg:w-1/2 sm:px-0 pt-20 lg:pt-40 text-slate-350 text-lg flex flex-wrap justify-center lg:block lg:mb-40">
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
  </main>
</section>
  );
}

export default Home;