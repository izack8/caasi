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

    useEffect(() => {
      fetch(API_ENDPOINTS.posts)
      .then (response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setError(error.message);
        setLoading(false);
      });
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
                    className="mb-8 rounded cursor-pointer"
                    onClick={() => navigate(`/writing/${key}`)}
                >
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <div className="text-xs text-gray-400 mt-2">
                    {new Date(post.date).toLocaleDateString()}
                    </div>
                </div>
                ))}
        </div>
    </section>
  );
}

export default WritingSection;