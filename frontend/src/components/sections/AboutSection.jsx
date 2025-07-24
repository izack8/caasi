import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-header text-center">
        <p className='text-xl font-bold'>About Me</p>
        <hr></hr>
      </div>

      

      <p className='text-justify'>
        My name is <b>Isaac</b>, and I am a Junior (emphasis on Junior) software developer and I love to code! 
        I'm currently learning how to build web applications using HTML, CSS, Python and FastAPI!!
      </p>
      
      
    </section>
  );
}

export default AboutSection;