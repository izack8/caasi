import SectionLabel from '../ui/SectionLabel';

function AboutSection() {
  return (
    <section className="about-section">
      <SectionLabel label="About Me" />

      <p className='text-justify mb-3'>
        Helloooooo!!!!1 My name is <b>Isaac</b>, and I am a Junior (emphasis on Junior) Software Developer, aspiring to be a really competent <b>AI Software Engineer</b>. 
      </p>

      <p className='text-justify mb-3'>
        My journey in software development started when I was in Polytechnic, where I learned how to build mobile applications. Following that, I pursued a degree in <b>Electrical and Electronic Engineering</b> from <b>Nanyang Technological University (NTU)</b>, because I wanted to learn more about how hardware and software interacts with each other.
      </p>

      <p className='text-justify mb-3'>
        Unfortunately, that didn't go so well (circuitry was so challenging to learn, imo), so for the last 2 years in Uni, I decided to shift my focus back to programming, which is where I also discovered <b>AI</b> and <b>Machine Learning</b>. I was so fascinated by how AI can be used to solve real-world problems, and I wanted to learn more about it (Like the entire concept of <b>Large Language Models (LLMs)</b> ARE SO COOL WTH).
      </p>

    </section>
  );
}

export default AboutSection;