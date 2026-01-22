import SparkleText from "../animation/Sparkles";

function AboutSection() {
  return (
    <section className="about-section">

      <p className='text-justify mb-3'>
        Hello! I'm a <span className="font-semibold">Software Engineer and Data Scientist</span> with over 2 years of experience. I studied <span className="font-semibold">Electrical and Electronics Engineering</span> at <span className="font-semibold"><a href="https://www.ntu.edu.sg/" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-500 transition-colors duration-200">Nanyang Technological University, Singapore (NTU)</a></span>, and have a passion for Computer Science, with a dream of one day being affectionately referred to as a "nerd🤓". I am currently developing AI solutions at a large FinTech consulting firm, <span className="font-semibold"><a href="https://synechron.com" className="underline hover:text-rose-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Synechron</a></span>, building ML pipelines for major financial institutions.</p>

      <p className="text-justify mb-3">
        I am really passionate for projects that explores the intersection of engineering and design, especially ones that involves solving challenging but meaningful problems, improving accessibility, or simply for the sake of fun and enjoyment. I always strive to do my best and learn as much as I can in this short life I have, and am always looking for opportunities to <span className="font-semibold">learn</span>, grow, contribute my skills effectively. Most importantly, <span className="font-semibold">I want to put as much cool stuff into the world as I can</span>, and I’m excited to see where this journey takes me! :D
      </p>

      <p className="text-justify mb-3">
        I like to unwind by playing video games with my friendos (Overwatch!!!), strumming the guitar, learning a new musical instrument, recording covers of pop songs (bonus points if you can find my YouTube channel), or hanging with my besties. 
      </p>

      <div className="flex font-semibold">
        <SparkleText>Slay vibes only!!! 🎮🎸🎤👯🩵</SparkleText>
      </div>

    </section>
  );
}

export default AboutSection;