import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import SectionLabel from '@/components/ui/SectionLabel';

function ConnectWithMeSection() {
    return (
        <section className="flex flex-col w-full items-center lg:items-start">
            <SectionLabel label="connect with me" />
            
            <div className="flex text-slate-500 gap-4">
                <a 
                    href="https://github.com/izack8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-zinc-900 transition-colors duration-200"
                >
                    <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm text-base">GitHub</span>
                </a>
                
                <a 
                    href="https://www.linkedin.com/in/isaac-tay-a31a3a236/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-[#0072b1] transition-colors duration-200"
                >
                    <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm text-base">LinkedIn</span>
                </a>
                
                <a 
                    href="documents/isaactay_resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-red-500 transition-colors duration-200"
                >
                    <FaFilePdf className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm text-base">Resume</span>
                </a>
            </div>
        </section>
    );
}

export default ConnectWithMeSection;