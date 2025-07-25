import { Link } from 'react-router-dom';


function HelloSection() {
  return (
    <section className="sticky top-60 w-full">
      <div className="profile-image">
        {/* Add your profile image here */}
        <div className="avatar text-center">👨‍💻</div>
      </div>

      <h1 className="hero-text text-center">Hello! My name is Isaac.</h1>
      <h3 className="hero-subtitle text-center">I am a Junior Software Developer</h3>

      <p className='hero-description text-center'>
        My name is <b>Isaac</b>, and I am a Junior (emphasis on Junior) software developer and I love to code! 
        I'm currently learning how to build web applications using HTML, CSS, Python and FastAPI!!
      </p>
      
      
    </section>
  );
}

export default HelloSection;