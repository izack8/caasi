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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {displayProjects.length === 0 && (
        <div className="text-center col-span-full">No projects found</div>
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
    className="flex flex-col gap-y-2 h-full rounded-xl transition-all duration-300 group bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 p-4 shadow-lg hover:shadow-xl hover:scale-[1.02]">

          <h1 className="text-xl font-bold text-blue-900 group-hover:text-blue-500 transition-all duration-300">
            {project.title}
          </h1>
            
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaCalendar className='w-3 h-3' />
            {project.year}
          </div>

          <p className="text-slate-700 text-sm flex-grow">
            {project.description}
          </p>

          <div className="mt-auto">
            <ProjectTechStack technologies={project.technologies} />
          </div>
            
          </Link>

  )
}