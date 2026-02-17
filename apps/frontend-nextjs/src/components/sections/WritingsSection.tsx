'use client'

import SectionLabel from "@/components/ui/SectionLabel";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingBar from '@/components/ui/LoadingBar';
import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { api } from '@/lib/api';
import type { Post } from '@/lib/types';

function WritingSection() {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState("All");
  const router = useRouter();

  const fetchPosts = async () => {
    try {
      const data = await api.getPosts();
      setPosts(data);
      setLoading(false);
    } catch (error: any) {
      console.error('Error fetching posts:', error);
      setError(error.message);
      setLoading(false);
    }
  };  

  useEffect(() => {
    fetchPosts();
  }, []);

  const uniqueTags = ["All", ...new Set(posts.flatMap((post) => post.type))].filter(tag => tag !== "Extras");

  const filteredPosts = activeTag === "All" ? posts.filter((post) => !post.type.includes("Extras")) : posts.filter((post) => post.type.includes(activeTag));

  const handleTagChange = (newTag: string) => {
    if (newTag === activeTag) return;
    setActiveTag(newTag);
  };

  return (
    <section className="writing-section w-full flex flex-col">
      <SectionLabel label="Posts" />
        {loading && <LoadingBar />}
        <div className="flex gap-2 mb-5 justify-center lg:justify-start">
          {uniqueTags.map((tag, index) => (
            <Button
              key={index}
              variant={activeTag === tag ? "active" : "ghost"}
              onClick={() => { setActiveTag(tag); handleTagChange(tag); }}
            size="md"
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
                onClick={() => router.push(`/writings/posts/${post.id}`)}
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
                </motion.div>
                
              ))}
              </motion.div>
             
              </AnimatePresence>
        </div>
        
        
    </section>
  );
}

export default WritingSection;