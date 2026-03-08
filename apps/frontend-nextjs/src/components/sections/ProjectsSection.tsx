import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectTechStack from '@/components/ProjectTechStack';
import { FaCalendar, FaExternalLinkAlt, FaArrowRight} from 'react-icons/fa';
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

      <div className="flex flex-col gap-y-5">

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
     <Link key={index}
    href={`/work/projects/${project.slug}/overview`} 
    className="flex flex-col gap-y-2 w-full rounded-lg transition-all duration-300 group lg:hover:bg-white/20 lg:bg-transparent border border-white/80 lg:border-transparent p-4">

          <h1 className="text-xl font-bold group-hover:text-blue-500 transition-all duration-300 w-full flex flex-row items-center">
            <span>{project.title}</span>
            </h1>
            
            {/* {(project.url?.live) && (project.url.live !== "") && (
            <h2 className="text-md flex items-end hover:text-rose-500 transition-colors duration-200 font-medium">
              <Link className="flex flex-row gap-2 text-lg items-center group/link" 
              href={project.url.live}
              target="_blank" 
              rel="noopener noreferrer">
                  {project.url.live}
                  <FaExternalLinkAlt className="w-3 h-3 group-hover:text-rose-500 group-hover:w-4 group-hover:h-4 group-hover/link:w-5 group-hover/link:h-5 transition-all duration-200" />
              </Link>
            </h2>
              )} */}
            
            <h2 className="font-semibold flex items-center gap-2"><FaCalendar className='w-3 h-3' />{project.year}</h2>

            
            <p className="text-slate-350 justify-items-left text-md">
              {project.description}
            </p>

          <div>
           <ProjectTechStack technologies={project.technologies} />
           </div>
           
           {/* <div className='flex flex-row gap-2'>
            <Link href={`/work/projects/${project.slug}`} className="text-md font-semibold text-blue-800 hover:text-blue-500 transition-colors duration-200 flex items-center gap-1">
              know more
              <FaArrowRight className="w-3 h-3" />
            </Link>
           </div> */}
            
          </Link>

  )
}