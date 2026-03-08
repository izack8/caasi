import MotionWrapper from '@/components/ui/MotionWrapper';
import { FaGithub, FaExternalLinkAlt, FaPenAlt } from 'react-icons/fa';
import ProjectTechStack from '@/components/ProjectTechStack';
import BackButton from '@/components/ui/BackButton';
import { getCachedProject } from '@/lib/api';
import type { Project } from '@/lib/types';
import Link from 'next/link';
import ProjectTabs from '@/components/ProjectTabs';

export default async function ProjectLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slug = id;

  let project: Project | null = null;
  
  try {
    project = await getCachedProject(slug);
  } catch (error) {
    project = {
      id: "not-found",
      slug: "not-found",
      title: "something bad happened/i didn't make this project! :(",
      description: "not found",
      year: "2024",
      what_i_learnt: "i have other cool projects you can check out!!! :)",
      technologies: [],
      url: {
        live: "",
        github: "",
        blog_post: ""
      },
      www: {
        what: "but anyways, 1/3 site secrets found! hehe",
        why: "i'm writing this at 3am, so i have no idea what to put here lol",
        who: "67"
      },
      timeline: [{"timeline_date": "hehe", "timeline_description": "ok bye"}]
    };
  }

  if (!project) {
    return <div className="p-5">Loading...</div>;
  }

  return (
    <>
      <BackButton section="work" />
      <MotionWrapper id="project-detail">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-3xl font-semibold">{project.title}</h1>

          <div className="flex flex-row gap-x-4 w-full">
            {[
              { url: project?.url?.live, icon: FaExternalLinkAlt, label: 'Live Site', iconClass: 'w-5 h-5', hoverColor: 'hover:text-rose-500', isInternal: false },
              { url: project?.url?.github, icon: FaGithub, label: 'GitHub', iconClass: 'w-5 h-5', hoverColor: 'hover:text-slate-900', isInternal: false },
              { url: project?.url?.blog_post, icon: FaPenAlt, label: 'Blog Post', iconClass: 'w-5 h-5', hoverColor: 'hover:text-blue-500', isInternal: true }
            ].map((link, index) => {
              if (!link.url || link.url === "") return null;
              
              return (
                <Link 
                  key={index}
                  href={link.url}
                  {...(!link.isInternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={`group flex items-center gap-2 ${link.hoverColor} transition-colors duration-200`}
                >
                  <link.icon className={`group-hover:scale-110 transition-transform duration-200 ${link.iconClass}`} />
                  <span className="text-base">{link.label}</span>
                </Link>
              );
            })}
          </div>
          
          <div className="flex flex-row gap-x-3">
            <ProjectTechStack technologies={project.technologies} />
          </div>

          <ProjectTabs projectId={slug} />

          {children}
        </div>
      </MotionWrapper>
    </>
  );
}
