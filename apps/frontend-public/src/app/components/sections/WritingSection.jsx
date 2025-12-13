import SectionLabel from "../ui/SectionLabel";
import { useEffect, useState } from "react";
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

  const fetchPosts = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.posts);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(data);
      setLoading(false);
      sessionStorage.setItem('cachedPosts', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error.message);
      setLoading(true);
    }
  };  

  useEffect(() => {
    const cachedPosts = sessionStorage.getItem('cachedPosts');

    if (cachedPosts) {
      setPosts(JSON.parse(cachedPosts));
      setLoading(false);
    } else {
      fetchPosts();
    }
  }, []);

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
        <div className="flex gap-2 mb-6">
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
                <div className="text-sm text-black-400">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                  <h2 className="text-xl font-bold group-hover:text-blue-800 transition-colors duration-200">{post.title}</h2>
                  <div className="text-md text-gray-600">
                    {post.description}
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