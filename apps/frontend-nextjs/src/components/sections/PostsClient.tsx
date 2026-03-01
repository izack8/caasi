'use client';

import { useState } from "react";
import Button from "@/components/ui/Button";
import type { Post } from "@/lib/types";
import Link from "next/link";

interface PostsClientProps {
  posts: Post[];
  numPosts?: number;
}

function convertDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

export default function PostsClient({ posts, numPosts }: PostsClientProps) {
  const [activeTag, setActiveTag] = useState("All");

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
        {filteredPosts.slice(0, numPosts).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export function PostCard({ post }: { post: any }) {
  return (

    <Link key={post.id} href={`/writings/posts/${post.id}`}>

          <div className="rounded cursor-pointer group">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold group-hover:text-blue-500 transition-colors duration-200">
                {post.title}
              </h1>
              <h2 className="text-md">{post.description}</h2>
              <h2 className="text-sm text-black-400">
                {convertDate(post.date)}
              </h2>
              
            </div>
          </div>
          </Link>
          
  )
}
