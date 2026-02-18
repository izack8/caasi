'use client'
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BackButton from '@/components/ui/BackButton';
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


  if (loading) {
    return <div className="p-5">Loading...</div>;
  }

  if (!post) {
    return <div className="p-5">Post not found</div>;
  }

  return (

    <>
    <div className="mb">
            <BackButton />
        </div>
      
    <MotionWrapper id="post-detail">

        <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <h1 className="text-lg">{post.description}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      </div>
      
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
    </>
  );
}
