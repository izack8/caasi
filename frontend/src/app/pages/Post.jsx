import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '../components/ui/MarkdownRenderer';
import { API_ENDPOINTS } from '../config';
import Footer from '../components/ui/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_ENDPOINTS.post(id))
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  const handleBack = () => {
    navigate("/", { state: { tab: 'writing' }});
  };

  return (
    <AnimatePresence mode="wait">
      {!post ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="p-8 text-center"
        >
          Loading...
        </motion.div>
      ) : (
        <motion.div
          key={post.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "ease" }}
        >
          <div className="font-sans mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-16">
            <div className="mb-3">
              <button
                className="tab font-semibold relative pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
                onClick={handleBack}
              >
                back to posts
                <span className="absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 bg-black"></span>
              </button>
            </div>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <h2 className="text-md font-bold mb-5">{post.date}</h2>
            <MarkdownRenderer content={post.md} />
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Post;