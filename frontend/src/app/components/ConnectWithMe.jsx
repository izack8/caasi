import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

function ConnectWithMe() {
    return (
        <div className="flex flex-col w-full mt-8 lg:mt-5">
            
            <div className="flex items-center text-slate-500 gap-4 justify-center">
                <a 
                    href="https://github.com/izack8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-zinc-900 transition-colors duration-200"
                >
                    <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm sm:text-base">GitHub</span>
                </a>
                
                <a 
                    href="https://www.linkedin.com/in/isaac-tay-a31a3a236/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
                >
                    <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm sm:text-base">LinkedIn</span>
                </a>
                
                <a 
                    href="/caasi/frontend/public/ISAAC_TAY_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-red-400 transition-colors duration-200"
                >
                    <FaFilePdf className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm sm:text-base">Resume</span>
                </a>
            </div>
        </div>
    );
}

export default ConnectWithMe;