import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '../components/ui/MarkdownRenderer';
import { API_ENDPOINTS } from '../config';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.post(id))
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  if (!post) return <div className="p-8 text-center">Loading...</div>;

  return (
    
    <div className="font-sans mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-16">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <MarkdownRenderer content={post.md} />
      <div className="text-xs text-gray-400 mb-2">{post.date}</div>
    </div>
  );
}

export default Post;
