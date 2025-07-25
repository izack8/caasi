import { useEffect } from 'react';

function ProjectModal({ project, onClose }) {
  // Close modal on escape key
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
    <div className="font-roboto fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-white">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div 
            className="text-slate-300 mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{__html: project.description}} 
          />

          {/* Year */}
          {project.year && (
            <p className="text-sm text-slate-400 mb-4">
              <strong>Year:</strong> {project.year}
            </p>
          )}

          {/* Points */}
          {project.points && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Gallery:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((image, i) => (
                  <img 
                    key={i}
                    src={image} 
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                View Live Site
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;