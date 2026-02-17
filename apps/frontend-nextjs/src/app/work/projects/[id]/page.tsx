
import MotionWrapper from '@/components/ui/MotionWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import ProjectTechStack from '@/components/ProjectTechStack';
import Timeline from '@/components/ui/Timeline';
import BackButton from '@/components/ui/BackButton';
import { api } from '@/lib/api';
import type { Project } from '@/lib/types';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const slug = id;

    const defaultErrorProject: Project = {
        id: "not-found",
        slug: "not-found",
        title: "awwie. i didn't make this project! :(",
        description: "not found",
        year: "2024",
        what_i_learnt: "it's ok! i have other cool projects you can check out!!! :)",
        technologies: [],
        url: {
        link: "",
        github: ""
        },
        www: {
        what: "(i have a secret page!)",
        why: "(up to you to find it :p)",
        who: "i'm so hungry "
        },
        timeline: [{"timeline_date": "hehe", "timeline_description": "cyaaa!"}]
    };

    let project: Project = defaultErrorProject
    
    try{
        project = await api.getProject(slug);
    } catch (error) {
        console.error("Error fetching project:", error);
    }

    if (!project) {
        return <div className="p-5">Loading...</div>;
    }

    return (
      <>
        <div className="mb-3">
              <BackButton />
          </div>
  
            <MotionWrapper id="project-detail">
                  <div className="flex flex-col gap-y-4">
                    <h1 className="text-3xl font-semibold">{project ? project.title : 'not found'}</h1>
  
                  <div className="">
                    <div className="flex flex-row gap-x-2 w-full">
                    {project && project.url?.link && project.url.link !== "" && (
                      <a 
                          href={project.url.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 hover:text-[#0072b1] transition-colors duration-200"
                      >
                          <FaExternalLinkAlt className="group-hover:scale-110 transition-transform duration-200 w-5 h-5 hover:text-[#0072b1] transition-colors" />
                          <span className="text-md text-base">Live Site</span>
                      </a>
                    )}
                    
                    {project && project.url?.github && project.url.github !== "" && (
                      <a 
                          href={project.url.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 hover:text-slate-900 transition-colors duration-200"
                      >
                        <FaGithub className="group-hover:scale-110 transition-transform duration-200 w-6 h-6 hover:text-slate-900" />
                        <span className="text-md text-base">GitHub</span>
                      </a>
                      
                    )}
                    </div>
                    
                  </div>
                  <div className="flex flex-row gap-x-3">
                    <ProjectTechStack technologies={project ? project.technologies : []} />
                  </div>
  
                  </div>
  
  
          <div className="mb-4 flex flex-col gap-y-2">
            {/* To-do: update project content here plz dont procrastinate*/}
            
              <div className="flex flex-col gap-y-2 text-justify">
  
                <div>
                  <h2 className="text-xl font-semibold">abstract</h2>
                  <div className="text-justify">
                    <ReactMarkdown>{project ? project.what_i_learnt : ''}</ReactMarkdown>
                  </div>
              </div>

                <div className="">
                  <h1 className="text-xl font-semibold">what</h1>
                  <span className="text-justify">{project ? project.www.what : ''}</span>
                </div>
                
                <div className="">
                  <h1 className="text-xl font-semibold">why</h1>
                  <span className="text-justify">{project ? project.www.why : ''}</span>
                </div>
  
                <div className="">
                  <h1 className="text-xl font-semibold">who</h1>
                  <span className="text-justify">{project ? project.www.who : ''}</span>
                </div>
            </div>
          </div>
  
            <Timeline timelineData={project ? project.timeline : []} />
  
        </MotionWrapper>
  
      </>
    );}
