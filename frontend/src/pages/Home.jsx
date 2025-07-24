import HelloSection from '../components/sections/HelloSection';
import AboutSection from '../components/sections/AboutSection';
// import ProjectsSection from '../components/sections/ProjectsSection';
// import JourneySection from '../components/sections/JourneySection';

function Home() {
  return (
    <div className="home-container">
      {/* Fixed left sidebar */}
      <div className="home-left">
        <HelloSection />
      </div>
      
      {/* Scrollable right content */}
      <div className="home-right">
        <AboutSection />
      </div>
    </div>
  );
}

export default Home;