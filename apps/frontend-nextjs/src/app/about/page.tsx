'use client'

import MotionWrapper from '@/components/ui/MotionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import AboutSection from '@/components/sections/AboutSection';
import ConnectWithMeSection from '@/components/sections/ConnectWithMeSection';

export default function AboutPage() {
  return (
    <MotionWrapper id="about">
      <PageHeader title="🎮 with love," subtitle="from your local whimsy software engineer" />
      <div className='flex flex-col gap-y-10'>
        <AboutSection />
        <ConnectWithMeSection />
      </div>
    </MotionWrapper>
  );
}
