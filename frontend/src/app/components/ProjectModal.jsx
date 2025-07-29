import { useEffect } from 'react';

function ProjectModal({ project, onClose }) {
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="font-roboto fixed inset-0 bg-black/70 flex items-center justify-center p-4 text-slate-600">
      <div className="bg-neutral-200 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex p-6 border-b border-slate-700 w-full">
          <div className="flex gap-3 items-center w-[90%]">
            <h2 className="text-xl font-bold">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="hover:text-white text-2xl w-[10%]"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-wrap w-full">
          <div className="w-4/5">
          <p>slay</p>
            </div>
            <div className="w-1/5 flex flex-col justify-center items-center">
              {project.technologies.map((tech, index) => (
                <div key={index} className="mb-2 justify-center items-center p-2">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-200"
                  />
                  <span className="text-sm text-slate-500 justify-center items-center">{tech.name}</span>
                </div>
              ))}
            </div>
        </div>


      </div>
    </div>
  );
}

export default ProjectModal;