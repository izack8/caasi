import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config';
import SectionLabel from '../ui/SectionLabel';
import ProjectModal from '../ProjectModal';
import Button from '../ui/Button';
import ProjectTechStack from '../ProjectTechStack';
import LoadingBar from '../ui/LoadingBar';
import { FaCalendar } from 'react-icons/fa';


function ProjectsSection({ showAll = false }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.projects);
      const data = await res.json();
      data.sort((a, b) => {
      const yearA = parseInt(String(a.year).split(' ')[0]) || 0;
      const yearB = parseInt(String(b.year).split(' ')[0]) || 0;
      return yearB - yearA;
    });
      console.log("Fetched projects:", data);
      setProjects(data);
      setLoading(false);
      sessionStorage.setItem('cachedProjects', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError(error.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    const cachedProjects = sessionStorage.getItem('cachedProjects');
    if (cachedProjects) {
      setProjects(JSON.parse(cachedProjects));
      setLoading(false);
    } else {
      fetchProjects();
    }
  }, []);


  const displayProjects = showAll ? projects : projects.slice(0, 10);

  return (
    
    <section className="projects-section w-full flex flex-wrap">
      <SectionLabel label="Projects" />
      {loading && <LoadingBar />}
      {displayProjects.length === 0 && !loading && (
        <div className="text-center">No projects found</div>
      )}
      {displayProjects.map((project, index) => (
        <div key={index} className="w-full rounded-lg transition-all duration-300 group relative mb-10">
          <div className="flex flex-col mb-3">
            <h2 className="text-blue-900 text-[17px] font-bold group-hover:text-blue-500 transition-all duration-300">
              {project.title}
              </h2>
              <h3 className="font-semibold flex items-center gap-2"><FaCalendar className='w-3 h-3' />{project.year}</h3>
            </div>
            
            <p className="text-slate-350 justify-items-left mb-3 text-md">
              {project.description}
            </p>

          <div className="mb-3">
           <ProjectTechStack technologies={project.technologies} />
           </div>
           <div className='flex flex-row gap-2'>
            <Button 
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="w-full rounded-md transition-colors"
              variant="default"
            >
              View More
            </Button>
            
           {project.url?.link && project.url.link !== "" && (
            <Button className='w-full rounded-md transition-colors' variant='live' onClick={() => window.open(project.url.link, '_blank')}>
              View Live Site
              </Button>)}
              </div>
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