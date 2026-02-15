import { useNavigate } from "react-router-dom";
import SparkleText from "../animation/Sparkles";

function AboutSection() {
  const navigate = useNavigate();
  
  return (
    <section className="flex flex-col text-justify gap-y-4">
      <p>
        Hello! My name is <span onClick={() => navigate(`/`)} className="underline hover:text-rose-500 transition-colors duration-200 cursor-pointer">Isaac</span>, and I'm a <span className="tracking-[.2em]"><SparkleText>whimsy</SparkleText></span> ai and software engineer, curious about the digital world, with a dream of one day being affectionately referred to as a "nerd🤓". I love solving <span className="font-semibold"><a href="https://minutecryptic.com" className="underline hover:text-rose-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">minute cryptics</a></span> (love-hate actually), playing video games with my friendos (Overwatch!!!), playing the guitar, learning new musical instruments, reading, and hanging with my besties. I also love to make singing covers of pop songs (especially mandopop hehe)!!! I am currently developing AI solutions at a large FinTech consulting firm, <span className="font-semibold"><a href="https://synechron.com" className="underline hover:text-rose-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Synechron</a></span>, building ML pipelines for major financial institutions.
        </p>

      <p className="">
        I majored in <span className="font-semibold">Electrical and Electronics Engineering</span> at <span className="font-semibold"><a href="https://www.ntu.edu.sg/" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-500 transition-colors duration-200">Nanyang Technological University, Singapore (NTU)</a></span>, (which strangely sparked a really strong interest for computer science (at least for the next 5 years, before I pivot my obessession to something else)). I'm really passionate for projects that explores the intersection of engineering and design, and also ones that involves solving challenging but meaningful problems: like improving accessibility; or even simply for the sake of fun and enjoyment.
      </p>

      <p>
        I'd like to think that I'm an individual that <span className="line-through">always</span> strives to give my best, and learn as much as I can in this short life I have, so I'm always looking for opportunities to learn, grow and contribute my skills effectively. But most importantly, <span className="font-semibold">I really want to put as much cool stuff into the world as I can</span>, and I’m très excité to see where this journey takes me! :D
      </p>


      <div className="flex font-semibold">
        <SparkleText>Slay vibes only!!! 🎮🎸🎤👯🩵</SparkleText>
      </div>

    </section>
  );
}

export default AboutSection;