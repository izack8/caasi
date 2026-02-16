import SparkleText from '../components/animation/SparkleText';
import ExecutiveSection from '../components/sections/ExecutiveSection';
import SummarySection from '../components/sections/SummarySection';
import PageHeader from '../components/ui/PageHeader';
import { motion } from 'framer-motion'


function Home() {

  return (
    <>  
    <motion.div 
      id="about" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <PageHeader title={<SparkleText>hey there!</SparkleText>} subtitle="thanks for visiting! please enjoy your stay <3" />

      <div className="flex flex-col">
        <ExecutiveSection />
        <SummarySection />
      </div>
      
    </motion.div>
    </>
  );
}

export default Home;