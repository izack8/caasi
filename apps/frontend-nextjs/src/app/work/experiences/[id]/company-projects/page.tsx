'use client';

import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { getCachedExperience } from '@/lib/api';
import type { Experience, CompanyProject } from '@/lib/types';
import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function CollapsibleProject({ project, index }: { project: CompanyProject, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    { title: 'What', content: project.what, color: 'bg-blue-500' },
    { title: 'Why', content: project.why, color: 'bg-green-500' },
    { title: 'Who', content: project.who, color: 'bg-purple-500' }
  ];

  return (
    <div className="transition-all duration-300">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between group"
      >
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-lg font-medium group-hover:text-blue-500 transition-colors duration-200">
            {project.project_name}
          </h2>
          {/* <p className="text-sm text-gray-600 text-left">
            {`lowk`}
          </p> */}
        </div>
        {isExpanded ? (
          <FaChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0 ml-4" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 ml-4" />
        )}
      </button>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[2000px]' : 'max-h-0'
        }`}
      >
        <div className="mt-6">
          <div className="flex flex-col gap-6">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-md text-gray-700 font-semibold mb-2">{section.title}</h3>
                <MarkdownRenderer>
                  {section.content}
                </MarkdownRenderer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceCompanyProjectsPage({ params }: { params: Promise<{ id: string }> }) {
  const [experience, setExperience] = useState<Experience | null>(null);

  useEffect(() => {
    async function loadExperience() {
      const { id } = await params;
      const slug = id;

      try {
        const exp = await getCachedExperience(slug);
        setExperience(exp);
      } catch (error) {
        setExperience({
          id: "not-found",
          slug: "not-found",
          title: "something bad happened/i didn't make this experience! :(",
          description: "not found",
          location: "somewhere on earth",
          company: "not found",
          duration: "2024",
          tags: [],
          link: "",
          timeline: [{"timeline_date": "hehe", "timeline_description": "ok bye"}],
          projects: []
        });
      }
    }

    loadExperience();
  }, [params]);

  if (!experience) {
    return <div className="p-5">Loading...</div>;
  }

  return (
    <div className="mt-4">
      {experience.projects && experience.projects.length > 0 ? (
        <div className="flex flex-col gap-y-6">
          {experience.projects.map((project, index) => (
            <CollapsibleProject key={index} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No company projects added (yet).</p>
      )}
    </div>
  );
}
