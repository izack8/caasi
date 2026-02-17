'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SparkleText from '@/components/animation/SparkleText';
import ExecutiveSection from '@/components/sections/ExecutiveSection';
import SummarySection from '@/components/sections/SummarySection';
import PageHeader from '@/components/ui/PageHeader';

export default function HomePage() {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      id="home" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PageHeader 
        title={<SparkleText>{windowWidth > 1023 ? "hey there!" : "hey there! i'm isaac 🎮"}</SparkleText>} 
        subtitle="thanks for visiting! please enjoy your stay <3" 
      />

      <div className="flex flex-col">
        <ExecutiveSection />
        <SummarySection />
      </div>
    </motion.div>
  );
}