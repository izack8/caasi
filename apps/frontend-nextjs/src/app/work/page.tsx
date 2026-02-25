import { Suspense } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import MotionWrapper from '@/components/ui/MotionWrapper';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperiencesSection from '@/components/sections/ExperiencesSection';
import TechStackSection from '@/components/sections/TechStackSection';
import LoadingBar from '@/components/ui/LoadingBar';

export default function WorkPage() {
  return (
    <MotionWrapper id="work">
      <PageHeader 
        title="leveling up & side quests" 
        subtitle="projects, skills, professional experiences, trying to build cool stuff, automate things, etc etc"
      />

    <div className="flex flex-col gap-y-10">
      <Suspense fallback={<LoadingBar />}>
        <ProjectsSection showAll={true} />
      </Suspense>
      
      <Suspense fallback={<LoadingBar />}>
        <ExperiencesSection />
      </Suspense>
      <TechStackSection />
    </div>

    </MotionWrapper>
  );
}
