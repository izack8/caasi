'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import type { Post } from "@/lib/types";
import Link from "next/link";

interface PostsClientProps {
  posts: Post[];
}

export default function PostsClient({ posts }: PostsClientProps) {
  const [activeTag, setActiveTag] = useState("All");
  const router = useRouter();

  const uniqueTags = ["All", ...new Set(posts.flatMap((post) => post.type))].filter(tag => tag !== "Extras");

  const filteredPosts = activeTag === "All" 
    ? posts.filter((post) => !post.type.includes("Extras")) 
    : posts.filter((post) => post.type.includes(activeTag));

  const handleTagChange = (newTag: string) => {
    if (newTag === activeTag) return;
    setActiveTag(newTag);
  };

  return (
    <>
      {filteredPosts.length === 0 && (
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
          <Link key={post.id} href={`/writings/posts/${post.id}`}>

          <div className="rounded cursor-pointer group">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold group-hover:text-blue-800 transition-colors duration-200">
                {post.title}
              </h1>
              <h2 className="text-md">{post.description}</h2>
              <h2 className="text-sm text-black-400">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h2>
            </div>
          </div>
          </Link>
        ))}
        
      </div>
    </>
  );
}
