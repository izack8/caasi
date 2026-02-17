'use client'
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import MotionWrapper from '@/components/ui/MotionWrapper';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { api } from '@/lib/api';
import type { Post } from '@/lib/types';

export default function PostPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  
  const fetchPost = async () => {
    try {
      const postData = await api.getPost(id);
      setPost(postData);
      setLoading(false);
      console.log("Fetched post:", postData);
    } catch (error) {
      console.error("Error fetching post:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return <div className="p-5">Loading...</div>;
  }

  if (!post) {
    return <div className="p-5">Post not found</div>;
  }

  return (
    <MotionWrapper id="post-detail">
      <div className="mb-3">
                <button
                  className="tab font-semibold pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
                  onClick={handleBack}
                >
                  <FaAngleLeft className="inline mr-1" />
                  back to home
                </button>
        </div>
      
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      
      {post.tags && (
        <div className="flex gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <MarkdownRenderer>{post.content}</MarkdownRenderer>

    </MotionWrapper>
  );
}
