import { useNavigate } from 'react-router-dom';
import Footer from '../../components/ui/Footer';
import PageTracker from '../../components/PageTracker';
import { motion, AnimatePresence } from 'framer-motion';

export default function NotFound() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

//   sessionStorage.setItem('lastVisitedPost', id);

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="mb-3">
                <button
                  className="tab font-semibold relative pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
                  onClick={handleBack}
                >
                  back to home
                  <span className="absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 bg-black"></span>
                </button>
              </div>
        
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-8 text-center"
          >
            404. Oops, are you supposed to be here :o? 
          </motion.div>

      </AnimatePresence>
    </>
  );
}