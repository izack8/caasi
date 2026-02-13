import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '../components/ui/MarkdownRenderer';
import { API_ENDPOINTS } from '../config';
import Footer from '../components/ui/Footer';
import PageTracker from '../components/PageTracker';
import { motion, AnimatePresence } from 'framer-motion';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const fetchPost =  async () => {
        try {
          const res = await fetch(API_ENDPOINTS.post(id));
          const postData = await res.json();
          setPost(postData);
          setLoading(false);
          console.log("Fetched post:", postData);
          sessionStorage.setItem(`lastVisitedPost_${id}`, JSON.stringify(postData));
        } catch (error) {
          console.error("Error fetching post:", error);
        }
    };

  useEffect(() => {

    const cachedPostFromFetchPosts = sessionStorage.getItem(`cachePosts`);
    const cachedPost = sessionStorage.getItem(`lastVisitedPost_${id}`);

    if (cachedPost) {
      setPost(JSON.parse(cachedPost));
      setLoading(false);
    } else {
      fetchPost(); 
    }

      
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  sessionStorage.setItem('lastVisitedPost', id);

  return (
    <>
      <div className="hidden lg:block absolute top-10">
          <PageTracker section={"writings"} currentPage={id ? id : ''}/>
      </div>
      <main className="flex flex-col pt-10 lg:py-20 px-5 lg:px-0">

        
        <div className="mb-3">
                <button
                  className="tab font-semibold relative pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
                  onClick={handleBack}
                >
                  back to posts
                  <span className="absolute left-0 bottom-0 w-full h-[2px] transition-all duration-200 bg-black"></span>
                </button>
              </div>
      <AnimatePresence mode="wait">
         <motion.div
            key={post ? post.id : 'loading'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
        {loading ? (
          <div className="p-8 text-center">
            Loading...
          </div>
        ) : (
         <>
              <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl font-semibold">{post.title}</h1>
                <h2 className="text-md">{post.description}</h2>
                <h2 className="text-md mb-5">{new Date(post.date).toLocaleDateString('en-US', 
                      { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</h2>
              </div>
              <MarkdownRenderer>{post.content}</MarkdownRenderer>
          </>
          )}
           <div className="items-end py-5 lg:py-0">
          <Footer />
        </div>
        </motion.div>
      </AnimatePresence>
       
      </main>
    </>
  );
}