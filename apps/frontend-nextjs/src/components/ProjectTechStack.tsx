import type { Technology } from '@/lib/types';

interface ProjectTechStackProps {
  technologies: Technology[] | string[];
}

function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((technology, index) => {
        // Handle both string array and object array
        const isString = typeof technology === 'string';
        const name = isString ? technology : technology.name;
        const icon = isString ? undefined : technology.icon;
        
        return (
          <div key={index} className="flex items-center gap-1 p-2 bg-slate-900/80 rounded-sm">
            {icon ? (
              <img src={icon} alt={name} className="w-4 h-4" />
            ) : null}
            <span className="text-xs text-slate-100">{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectTechStack;

