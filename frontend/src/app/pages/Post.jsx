import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
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
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <ReactMarkdown>{post.md}</ReactMarkdown>
      <div className="text-xs text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</div>
    </div>
  );
}

export default Post;
