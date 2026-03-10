'use client';

import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import type { CompanyProject } from '@/lib/types';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function CollapsibleProject({ project, index }: { project: CompanyProject, index: number }) {

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
          <h2 className="text-lg font-semibold group-hover:text-blue-500 transition-colors duration-200">
            {project.project_name}
          </h2>
            <p className="text-sm text-left text-gray-600">{project.project_about}</p>
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
                <h3 className="text-lg font-medium mb-2">{section.title}</h3>
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
