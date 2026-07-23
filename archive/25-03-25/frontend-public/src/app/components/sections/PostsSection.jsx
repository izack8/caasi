import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../config";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import LoadingBar from '../ui/LoadingBar';


function PostsSection() {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState(() => {
    return sessionStorage.getItem('activeTag') || "All";
  });
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.posts);
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

  const uniqueTags = ["All", ...new Set(posts.flatMap((post) => post.type))].filter(tag => tag !== "Extras");

  const filteredPosts = activeTag === "All" ? posts.filter((post) => !post.type.includes("Extras")) : posts.filter((post) => post.type.includes(activeTag));

  const handleTagChange = (newTag) => {
    if (newTag === activeTag) return;
    setActiveTag(newTag);
    sessionStorage.setItem('activeTag', newTag);
  };

  return (
    <section className="writings-section w-full flex flex-col">
      <SectionLabel label="Posts" />
      
        {loading && <LoadingBar />}
        {error && console.error('Error fetching posts:', error)}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center">No posts yet.</div>
         )}
        <div className="flex gap-2 mb-5 justify-center lg:justify-start">
          {uniqueTags.map((tag, index) => (
            <Button
              key={index}
              variant={activeTag === tag ? "active" : "ghost"}
              onClick={() => handleTagChange(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="rounded cursor-pointer group"
              onClick={() => navigate(`/writings/posts/${post.id}`)}
            >
              <div className="flex flex-col gap-y-1">
                <h1 className="text-lg
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
          </div>
        ))}
        </div>
    </section>
  );
}

export default PostsSection;