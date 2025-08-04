import { useEffect } from 'react';
import ProjectTechStack from './ProjectTechStack';
// import Slider from './ui/Slider';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectModal({ project, onClose }) {

  useEffect(() => {
  // Calculate scrollbar width
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  
  // Prevent scroll and compensate for scrollbar
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  
  return () => {
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0px';
  };
}, []);
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 min-h-screen min-w-screen text-slate-600">
      <div className="bg-neutral-200 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex p-6 bg-neutral-200 border-b border-slate-700 w-full sticky top-0">
          <div className="flex gap-3 items-center w-[90%]">
            <h2 className="text-2xl font-bold">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="hover:text-white text-2xl w-[10%]"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 w-full">
          {/* <div className="p-2 mb-4">
            <Slider />
          </div> */}

            <div className="grid lg:grid-cols-2 gap-5">
               <div className="bg-gray-600 p-7 rounded-lg h-full flex flex-col">

                

                  {Object.keys(project.www || {}).map((key) => (
                    <div key={key} className="mb-4">
                      <h4 className="text-sm uppercase text-white font-semibold">{key}</h4>
                      <p className="text-gray-300 text-md">{project.www[key]}</p>
                    </div>
                  ))}
                  

                  <div className="mb-4">
                      <h4 className="text-sm uppercase text-white font-semibold">Impact</h4>
                      <ul>
                      {project.impact.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} className="text-gray-300 text-md list-disc ml-5 justify-between"></li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                        <h4 className="text-sm uppercase text-white font-semibold">Github Link</h4>
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 text-md hover:text-blue-400 transition-colors flex items-center gap-2 mt-2 group"
                        >
                            <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>View Repository</span>
                            <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                    </div>

                  

              </div>

              

               <div className="bg-gray-600 p-4 rounded-lg h-full flex flex-col p-7">
                <div className="flex-1 mb-4">
                    <h4 className="text-sm uppercase text-white font-semibold">What I Learnt</h4>
                    <ul>
                      {project.what_i_learnt.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} className="text-gray-300 text-md list-disc ml-5"></li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                      <h4 className="text-sm uppercase text-white font-semibold mb-2">Tech Used/Learnt</h4>
                      <ProjectTechStack technologies={project.technologies} />
                  </div>
                  
                </div>
             
            </div>
            <div>
              
            </div>
        </div>


      </div>
    </div>
  );
}

export default ProjectModal;