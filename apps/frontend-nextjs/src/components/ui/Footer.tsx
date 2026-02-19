"use client"

import time_machine_gif from "../../../public/time_machine_rotation_gif.webp";
import Link from "next/link";

function Footer() {
  return (
    <div className="lg:text-left text-slate-350 text-[10px] w-full flex flex-col">
        <p>Design inspired by&nbsp;<Link className="underline" href="https://alvinchang.dev" target="_blank" rel="noopener noreferrer"
        >Alvin</Link>,&nbsp; 
        <Link className="underline" href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">Brittany</Link>,&nbsp;
          <Link className="underline" href="https://www.knlrvr.dev" target="_blank" rel="noopener noreferrer">Kane</Link>&nbsp;&&nbsp;
          <Link className="underline" href="https://www.taniarascia.com" target="_blank" rel="noopener noreferrer">Tania</Link>
          </p>
        <p>Built with React + Next, Tailwind CSS & FastAPI, with ♥️ by <a href="https://github.com/izack8" className="underline">Isaac</a></p>
        <p>Deployed on Vercel & Railway</p>
        &copy; 2025 - 2026
        <div className='flex items-center gap-2'>
          <span>Click Me to Time Travel!</span>
          {/* <SparkleText> */}
          <button 
            className="hover:scale-150 transition-transform duration-200 cursor-pointer"
            onClick={() => window.open('https://v1.izack.dev', '_blank')}
          >
            <img src={time_machine_gif.src} alt="Time Machine Rotation" className="w-15 h-15" />
          </button>
        </div>
    </div>
  );
}

export default Footer;