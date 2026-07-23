import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../config';
import { FaAngleLeft } from "react-icons/fa";
import ProjectTechStack from '../../components/ProjectTechStack';
import Timeline from '../../components/ui/Timeline';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const defaultErrorProject = {
                      id: "not-found",
                      slug: "not-found",
                      title: "awwie. i didn't make this project! :(",
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

  const fetchProjectFromAPI =  async () => {
        try {
          const res = await fetch(API_ENDPOINTS.project(id));

          if (!res.ok) {
            setProject(defaultErrorProject);
            return;
          }

          const projectData = await res.json();
          setProject(projectData);
          // setLoading(false);
          console.log("Fetched project:", projectData);
          sessionStorage.setItem(`lastVisitedProject_${id}`, JSON.stringify(projectData));
        } catch (error) {
          console.error("Error fetching project:", error);
          setProject(defaultErrorProject);
          // setLoading(false);
        }
    };

  const fetchProjectFromCache = () => {
      const cachedProject = sessionStorage.getItem(`lastVisitedProject_${id}`);
      if (cachedProject) {
        setProject(JSON.parse(cachedProject));
        // setLoading(false);
        console.log("Loaded project from cache:", JSON.parse(cachedProject));
      } else {
        fetchProjectFromAPI();
      }
  }

  useEffect(() => {
    const cachedProjects = sessionStorage.getItem("cachedProjects");
    const cachedProject = cachedProjects
      ? JSON.parse(cachedProjects).find((project) => project.slug === id)
      : null;

      // i need to test this
    if (cachedProject) {
      setProject(cachedProject);
      // setLoading(false);
    } else {
      fetchProjectFromCache();
    }
      
  }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    sessionStorage.setItem('lastVisitedProject', id);

  return (
    <>
      <div className="mb-3">
            <button
              className="tab font-semibold pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
              onClick={handleBack}
            >
              <FaAngleLeft className="inline mr-1" />
              back to projects
            </button>
        </div>

          <AnimatePresence mode="wait">
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
          
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
                  <ReactMarkdown className="text-justify">{project ? project.what_i_learnt : ''}</ReactMarkdown>
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

          </motion.div>
      </AnimatePresence>

    </>
  );
}