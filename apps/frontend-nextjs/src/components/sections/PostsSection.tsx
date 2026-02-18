'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import SectionLabel from "@/components/ui/SectionLabel"
import Button from "@/components/ui/Button";
import LoadingBar from '@/components/ui/LoadingBar';
import { api } from "@/lib/api";
import type { Post } from "@/lib/types";


function PostsSection() {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState("All");
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.getPosts();
        setPosts(data);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching posts:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const uniqueTags = ["All", ...new Set(posts.flatMap((post) => post.type))].filter(tag => tag !== "Extras");

  const filteredPosts = activeTag === "All" ? posts.filter((post) => !post.type.includes("Extras")) : posts.filter((post) => post.type.includes(activeTag));

  const handleTagChange = (newTag: any) => {
    if (newTag === activeTag) return;
    setActiveTag(newTag);
  };

  return (
    <section className="writings-section w-full flex flex-col">
      <SectionLabel label="Posts" />
      
        {loading && <LoadingBar />}
        {error && <div className="text-red-500">Error loading posts</div>}
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
              onClick={() => router.push(`/writings/posts/${post.id}`)}
            >
              <div className="flex flex-col">
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