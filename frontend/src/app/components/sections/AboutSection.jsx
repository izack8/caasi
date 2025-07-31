import SectionLabel from '../ui/SectionLabel';

function AboutSection() {
  return (
    <section className="about-section">
      <SectionLabel label="About Me" />

      <p className='text-justify mb-3'>
        Helloooooo!!!!1 My name is <b>Isaac</b>, and I am a Graduate (emphasis on Graduate) Data Scientist/Software Engineer, graduated from <b>Nanyang Technological University (NTU)</b> with a degree in <b>Electrical and Electronic Engineering</b>, aspiring to be a really competent <b>AI Software Engineer</b> (or tbh, any roles that involves writing code. tippity-tappity.). 
      </p>

      <p className="text-justify mb-3">
        I always strive to do my best and learn as much as I can in this short life I have, and am always looking for opportunities to learn, grow, contribute my skills effectively, and most importantly, <b>put out as much cool stuff to the world as I can!</b> I am excited to see where this journey will take me! :D
      </p>

      <p className="text-justify mb-3">
        If you don't find me coding, you can find me playing the guitar and making covers of songs made by the <b>greatest songwriter of this century, Ms. Taylor Alison Swift.</b> (Bonus points if you can find my YouTube channel, I have a few covers there (I'd like to think I sing pretty well, hehe))
      </p>

      <p className="text-justify mb-3">Also generally a little unserious :p</p>

    </section>
  );
}

export default AboutSection;