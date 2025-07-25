import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';

function AboutSection() {
  return (
    <section className="about-section">
      <SectionLabel label="About Me" />

      <p className='text-justify'>
        My name is <b>Isaac</b>, and I am a Junior (emphasis on Junior) software developer and I love to code! 
        I'm currently learning how to build web applications using HTML, CSS, Python and FastAPI!!
      </p>
  
      
    </section>
  );
}

export default AboutSection;