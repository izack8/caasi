'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ExperienceTabsProps {
  experienceId: string;
}

export default function ExperienceTabs({ experienceId }: ExperienceTabsProps) {
  const pathname = usePathname();
  
  const tabs = [
    { name: 'Overview', path: `/work/experiences/${experienceId}/overview` },
    { name: 'Timeline', path: `/work/experiences/${experienceId}/timeline` },
    { name: 'Projects', path: `/work/experiences/${experienceId}/company-projects` },
    
  ];

  return (
    <div className="flex gap-x-4">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.name}
            href={tab.path}
            className={`pb-2 px-1 text-lg font-medium border-b-2 transition-colors duration-200 ${
              isActive 
                ? 'border-blue-500 text-blue-500' 
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
