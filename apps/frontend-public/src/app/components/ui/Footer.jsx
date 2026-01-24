import time_machine_gif from '../../../assets/time_machine_rotation_gif.webp';
import SparkleText from '../animation/Sparkles';

function Footer() {
  return (
    <footer className="lg:text-left text-slate-350 text-[10px] w-full">
        <p>Coded by Isaac. Design inspired by
        &nbsp;<a className="underline" href="https://alvinchang.dev">Alvin</a>,
        &nbsp;<a className="underline" href="https://brittanychiang.com">Brittany</a>, and
        &nbsp;<a className="underline" href="https://www.knlrvr.dev">Kane</a>.</p>
        &copy; 2025 - 2026
        <div className='flex items-center gap-2'>
          <span>Click Me to Time Travel!</span>
          {/* <SparkleText> */}
          <button 
            className="hover:scale-150 transition-transform duration-200 cursor-pointer"
            onClick={() => /* Go to website */ window.open('https://v1.izack.dev', '_blank')}
          >
            <img src={time_machine_gif} alt="Time Machine Rotation" className="w-15 h-15" />
          </button>
          {/* </SparkleText> */}
        </div>
    </footer>
  );
}

export default Footer;