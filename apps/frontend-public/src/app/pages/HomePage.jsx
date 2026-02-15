import SparkleText from '../components/animation/Sparkles';
import ExecutiveSection from '../components/sections/ExecutiveSection';
import Footer from '../components/ui/Footer';
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
        <ExecutiveSection />
      
      <div className="flex lg:hidden mt-10 py-3">
        <Footer />
      </div>
    </motion.div>
    </>
  );
}

export default Home;