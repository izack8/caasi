import SectionLabel from "../ui/SectionLabel";
import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../config";
import { data, useNavigate } from "react-router-dom";
import LoadingBar from '../../components/ui/LoadingBar';

function WritingSection() {
  

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.posts);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Fetched posts:", data);
      setPosts(data);
      setLoading(false);
      sessionStorage.setItem('cachedPosts', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error.message);
      setLoading(false);
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

  return (
    <section className="writing-section">
      <SectionLabel label="My Writing" />
        {loading && <LoadingBar />}
        {error && <div className="text-center text-red-500">API did not hit :(. Error: {error}</div>}
        <div className="w-full">
            {!loading && Object.values(posts).length === 0 && (
                <div className="text-center">
                <p className="text-gray-600">No posts yet.</p>
                </div>
            )}
            {Object.entries(posts).map(([key, post]) => (
                <div
                    key={key}
                    className="mb-5 rounded cursor-pointer group"
                    onClick={() => navigate(`/writing/${key}`)}
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
                </div>
                ))}
        </div>
    </section>
  );
}

export default WritingSection;