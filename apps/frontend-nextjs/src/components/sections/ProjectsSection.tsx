import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectTechStack from '@/components/ProjectTechStack';
import { FaCalendar } from 'react-icons/fa';
import { getCachedProjects } from '@/lib/api';


interface ProjectsSectionProps {
  showAll?: boolean;
  numProjs?: number;
}

async function ProjectsSection({ showAll = false, numProjs }: ProjectsSectionProps) {

  const projects = await getCachedProjects();
  const displayProjects = showAll ? projects : projects.slice(0, numProjs || 10);

  return (
    
    <section className="projects-section w-full flex flex-col">
      <SectionLabel label="Projects" />

      <div className="flex flex-col gap-y-7">

      {displayProjects.length === 0 && (
        <div className="text-center">No projects found</div>
      )}
      {displayProjects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
        ))}
      
      </div>
    </section>
  );
}

export default ProjectsSection;

export function ProjectCard({ project, index }: { project: any, index?: number }) {
  return (
     <div key={index} className="flex flex-col gap-y-2 w-full rounded-lg transition-all duration-300 group">

          <h1 className="text-xl font-bold group-hover:text-blue-500 transition-all duration-300">
            {project.title}
            </h1>
            
            <h2 className="font-semibold flex items-center gap-2"><FaCalendar className='w-3 h-3' />{project.year}</h2>

            
            <p className="text-slate-350 justify-items-left text-md">
              {project.description}
            </p>

          <div>
           <ProjectTechStack technologies={project.technologies} />
           </div>
           <div className='flex flex-row gap-2'>
            <Link href={`/work/projects/${project.slug}`} className="w-full cursor-pointer">
              <div 
                className="flex items-center justify-center rounded-lg transition-all duration-200 w-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors h-10 text-md"
              >
                About Project
              </div>
            </Link>
            
           {(project.url?.live) && (project.url.live !== "") && (
            <Link href={project.url.live} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer">
              <div className='flex items-center justify-center rounded-lg transition-all duration-200 w-full bg-sky-700 text-white hover:bg-rose-500 hover:text-white rounded-md transition-colors h-10 text-md'>
                Live Site
              </div>
            </Link>
            )}
              </div>
          </div>
  )
}