'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ProjectTabsProps {
  projectId: string;
}

export default function ProjectTabs({ projectId }: ProjectTabsProps) {
  const pathname = usePathname();
  
  const tabs = [
    { name: 'Overview', path: `/work/projects/${projectId}/overview` },
    { name: 'Timeline', path: `/work/projects/${projectId}/timeline` }
  ];

  return (
    <div className="flex gap-x-5">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.name}
            href={tab.path}
            className={`pb-2 font-medium text-lg border-b-2 transition-colors duration-200 ${
              isActive 
                ? 'border-blue-500 text-blue-500 ' 
                : 'border-transparent text-black hover:text-blue-500'
            }`}
          >
            {tab.name}
            
          </Link>
        );
      })}
    </div>
  );
}
