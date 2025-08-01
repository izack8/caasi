import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../config';
import SectionLabel from '../ui/SectionLabel';
import ProjectModal from '../../components/ProjectModal';
import Button from '../ui/Button';
import ProjectTechStack from '../../components/ProjectTechStack';

function ProjectsSection({ showAll = false }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.projects)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Fetching projects from API...');
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })  
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center">Loading projects...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    
    <section className="projects-section w-full flex flex-wrap">
      <SectionLabel label="My Projects" />
        {displayProjects.map((project, index) => (
          <div key={index} className="w-full rounded-lg transition-all duration-300 group relative mb-4">
            <div className="flex flex-col mb-3">
              <h2 className="text-blue-900 text-lg font-bold group-hover:text-blue-500 transition-all duration-300">
                {project.title}
              </h2>
              <h3 className="font-bold">Year: {project.year}</h3>
            </div>
            
            <p className="text-slate-350 justify-items-left mb-3">
              {project.description}
            </p>

          <div className="mb-3">
           <ProjectTechStack technologies={project.technologies} />
           </div>

            <Button 
              onClick={() => setSelectedProject(project)}
              className="w-full rounded-md transition-colors"
              variant="default"
            >
              View More
            </Button>
          </div>
        ))}
      
      
      {/* {!showAll && projects.length > 3 && (
        <div className="text-center mt-6">
          <Link 
            to="/projects" 
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View All Projects ({projects.length})
          </Link>
        </div>
      )} */}

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectsSection;