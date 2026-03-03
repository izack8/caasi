'use client'

import { motion } from 'framer-motion';
import SparkleText from '@/components/animation/SparkleText';
import ExecutiveSection from '@/components/sections/ExecutiveSection';
import FeaturedWorksSection from '@/components/sections/FeaturedWorksSection';
import PageHeader from '@/components/ui/PageHeader';
import HeroTitle from '@/components/HeroTitle';

export default function HomePage() {

  return (
    <motion.div 
      id="home" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PageHeader 
        title={<SparkleText>🏡 izack.dev</SparkleText>} 
        subtitle="thanks for visiting! please enjoy your stay <3" 
      />
      <div className="lg:hidden mb-8">
       <HeroTitle />
      </div>

      <div className="flex flex-col gap-y-5">
        <ExecutiveSection />
        <FeaturedWorksSection />
      </div>
    </motion.div>
  );
}