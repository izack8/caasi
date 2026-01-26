import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '../components/ui/MarkdownRenderer';
import { API_ENDPOINTS } from '../config';
import Footer from '../components/ui/Footer';
import PageTracker from '../components/PageTracker';
import { motion, AnimatePresence } from 'framer-motion';

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

//   const fetchPost =  async () => {
//         try {
//           const res = await fetch(API_ENDPOINTS.post(id));
//           const postData = await res.json();
//           setPost(postData);
//           setLoading(false);
//           console.log("Fetched post:", postData);
//           sessionStorage.setItem(`lastVisitedPost_${id}`, JSON.stringify(postData));
//         } catch (error) {
//           console.error("Error fetching post:", error);
//         }
//     };

//   useEffect(() => {

//     const cachedPost = sessionStorage.getItem(`lastVisitedPost_${id}`);

//     if (cachedPost) {
//       setPost(JSON.parse(cachedPost));
//       setLoading(false);
//     } else {
//       fetchPost(); 
//     }

      
//   }, [id]);

    const handleBack = () => {
        navigate('/');
    };

//   sessionStorage.setItem('lastVisitedPost', id);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl lg:px-12 px-5 h-screen lg:h-auto">
      
      <div className="w-full h-full lg:flex lg:flex-col">
      <main className="flex flex-col pt-10 lg:py-20">

        <div className="hidden lg:block absolute top-10">
            <PageTracker section={"projects"} currentPage={id ? id : 'doesn\'t exist (yet?)'}/>
        </div>
      <AnimatePresence mode="wait">
        <div className="mb-3">
                <button
                  className="tab font-semibold relative pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
                  onClick={handleBack}
                >
                  back to projects
                  <span className="absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 bg-black"></span>
                </button>
              </div>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-8 text-center"
          >
            Hehe, you found a secret empty project page! 🚧
            Check back next time! :D
          </motion.div>
        ) : (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "ease" }}
          >
              <div className="flex flex-col gap-y-1">
                {/* To-do: update project content here plz dont procrastinate*/}
              </div>
              
            
          </motion.div>
         
        )}
      </AnimatePresence>
      </main>
      <div className="items-end py-5 lg:py-0">
            <Footer />
        </div>
      </div>
    </div>
  );
}