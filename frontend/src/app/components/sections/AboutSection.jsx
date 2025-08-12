import SectionLabel from '../ui/SectionLabel';

function AboutSection() {
  return (
    <section className="about-section">
      <SectionLabel label="About Me" />

      <p className='text-justify mb-3'>
        Hello! I am an aspiring <b>Data Scientist/Software Engineer</b>, graduated from <b>Nanyang Technological University Singapore (NTU)</b>, with a Bachelor's Degree in <b>Electrical and Electronic Engineering</b>. I am currently developing, and engineering AI solutions at <b><a className="underline" href="https://synechron.com">Synechron</a></b>, and building ML pipelines for financial institutions.</p>

      <p className="text-justify mb-3">
        I am passionate for projects that <b>involves cooking logic 🔥 and writing code 👨‍💻</b> (tippity-tappity), and I aspire to be a <b>really competent engineer one day</b>, building software/AI & ML models for public good! I always strive to do my best and learn as much as I can in this short life I have, and am always looking for opportunities to <b>learn</b>, grow, contribute my skills effectively, and most importantly, <b>put out as much cool stuff to the world as I can!</b> I am excited to see where this journey will take me! :D 
      </p>

      <p className="text-justify mb-3">
        If you don't find me writing code, you can find me playing the guitar (or learning a new musical instrument) and making covers of songs made by the <b>greatest songwriter of this century, Ms. Taylor Alison Swift.</b> (Bonus points if you can find my YouTube channel, I have a few covers there (I'd like to think I sing pretty well, hehe))
      </p>

      <p className="text-justify mb-3">Also generally a little unserious :p</p>

    </section>
  );
}

export default AboutSection;