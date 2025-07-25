import SectionLabel from '../ui/SectionLabel';
import { Link } from 'react-router-dom';

function ExperienceSection() {
  return (
    <section className="experience-section">
      <SectionLabel label="Experience" />

      <p className='text-justify'>
        I have worked on various projects, including web applications and software development tasks. 
        My experience includes working with technologies like HTML, CSS, Python, and FastAPI.
      </p>
      
      <Link to="/experience" className="text-blue-500 hover:underline">
        View my full experience
      </Link>
    </section>
  );
}

export default ExperienceSection;