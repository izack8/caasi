import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export default function NotFound() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="mb-3">
                <button
                  className="tab font-semibold pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
                  onClick={handleBack}
                >
                  <FaAngleLeft className="inline mr-1" />
                  back to home
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