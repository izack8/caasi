function ProjectTechStack({technologies}){
    return (
         <div className="flex flex-wrap gap-2">
            {technologies.map((technology, index) => (
                <div key={index} className="flex items-center gap-1 p-2 bg-slate-900/80  rounded-sm">
                    <img src={technology.icon} alt={technology.name} className="w-4 h-4" />
                    <span className="text-xs text-slate-100">{technology.name}</span>
                </div>
            ))}
        </div>
    )
}

export default ProjectTechStack;