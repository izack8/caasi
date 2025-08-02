import SectionLabel from "../ui/SectionLabel";
import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../config";
import { useNavigate } from "react-router-dom";

function WritingSection() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch(API_ENDPOINTS.posts)
        .then(res => res.json())
        .then(setPosts);
    }, []);

  return (
    <section className="writing-section">
    
    <SectionLabel label="My Writing" />
      
      <div className="w-full">
        {Object.values(posts).length === 0 && (
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