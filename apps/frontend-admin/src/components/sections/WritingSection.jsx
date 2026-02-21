import SectionLabel from "../ui/SectionLabel";
import { useEffect, useState, useCallback } from "react";
import { API_ENDPOINTS } from "../../config"; 
import { useNavigate } from "react-router-dom";
import LoadingBar from '../ui/LoadingBar';
import Button from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";

function WritingSection() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState("All");
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    console.log('🔄 Fetching posts...');
    try {
      setLoading(true);
      const res = await fetch(API_ENDPOINTS.posts);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log('✅ Fetched posts:', data.length, 'posts');
      setPosts(data);
      setLoading(false);
      sessionStorage.setItem('cachedPosts', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error.message);
      setLoading(false);
    }
  }, []);  


  useEffect(() => {
    const handlePostsUpdated = (event) => {
      fetchPosts();
    };

    window.addEventListener('postsUpdated', handlePostsUpdated);

    return () => {
      window.removeEventListener('postsUpdated', handlePostsUpdated);
    };
  }, [fetchPosts]);

  
  useEffect(() => {
    const cachedPosts = sessionStorage.getItem('cachedPosts');

    if (cachedPosts) {
      setPosts(JSON.parse(cachedPosts));
      setLoading(false);
    } else {
      fetchPosts();
    }
  }, [fetchPosts]);

  const uniqueTags = ["All", ...new Set(posts.flatMap((post) => post.type))];

  const filteredPosts = activeTag === "All" 
    ? posts 
    : posts.filter((post) => post.type === activeTag);

  const handleTagChange = (newTag) => {
    if (newTag === activeTag) return;
    setActiveTag(newTag);
    sessionStorage.setItem('activeTag', newTag);
  };
  useEffect(() => {
    const savedTag = sessionStorage.getItem('activeTag');
    if (savedTag) {
      setActiveTag(savedTag);
    }
  }, []);

  return (
    <section className="writing-section">
      <SectionLabel label="Blog Posts" />
        {loading && <LoadingBar />}
        {error && console.error('Error fetching posts:', error)}
        <div className="flex flex-col">
          <div className="mb-4">
              <Button
                onClick={() => navigate('/writing/new')}
              >
                new post
              </Button>
            </div>
        <div className="flex flex-row items-start gap-2 mb-6">
          {uniqueTags.map((tag, index) => (
            <Button
              key={index}
              variant={activeTag === tag ? "active" : "ghost"}
              onClick={() => { setActiveTag(tag); handleTagChange(tag); }}
            size="md"
            className=""
          >
            {tag}
          </Button>
        ))}
        </div>

            

        </div>
        
          
        <div className="w-full">
            {!loading && filteredPosts.length === 0 && (
              
                <div className="text-center">
                <p className="text-gray-600">No posts yet.</p>
                </div>
            )}
              
              
              <AnimatePresence mode="wait">  
              <motion.div key={activeTag}>
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-5 rounded cursor-pointer group"
                onClick={() => navigate(`/writing/${post.id}`)}
              >
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-xl 
                    font-semibold 
                    group-hover:text-blue-800 
                    transition-colors 
                    duration-200">{post.title}</h1>
                    <h2 className="text-md">{post.description}</h2>
                    <h2 className="text-sm text-black-400">{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</h2>
                  </div>
                </motion.div>
                
              ))}
              </motion.div>
             
              </AnimatePresence>
        </div>
        
        
    </section>
  );
}

export default WritingSection;