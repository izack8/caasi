import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import ProjectTechStack from '@/components/ProjectTechStack';
import { FaCalendar } from 'react-icons/fa';
import { getCachedProjects } from '@/lib/api';

interface ProjectsSectionProps {
  showAll?: boolean;
}

async function ProjectsSection({ showAll = false }: ProjectsSectionProps) {

  const projects = await getCachedProjects();
  const displayProjects = showAll ? projects : projects.slice(0, 10);

  return (
    
    <section className="projects-section w-full flex flex-col">
      <SectionLabel label="Projects" />

      {displayProjects.length === 0 && (
        <div className="text-center">No projects found</div>
      )}
      {displayProjects.map((project, index) => (
        <div key={index} className="w-full rounded-lg transition-all duration-300 group mb-10">
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
            <Link href={`/work/projects/${project.slug}`} className="w-full">
              <Button 
                className="w-full rounded-md transition-colors"
                variant="default"
              >
                View More
              </Button>
            </Link>
            
           {(project.url?.live) && (project.url.live !== "") && (
            <a href={project.url.live} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className='w-full rounded-md transition-colors' variant='live'>
                View Live Site
              </Button>
            </a>
            )}
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
      {/* {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )} */}
    </section>
  );
}

export default ProjectsSection;