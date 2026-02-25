import SectionLabel from "@/components/ui/SectionLabel";
import PostsClient from "@/components/sections/PostsClient";
import { getCachedPosts } from "@/lib/api";

interface PostsSectionProps {
  numPosts?: number;
}

async function PostsSection({ numPosts }: PostsSectionProps) {
  const posts = await getCachedPosts();

  return (
    <section className="writings-section w-full flex flex-col">
      <SectionLabel label="Posts" />
      <PostsClient posts={posts} />
    </section>
  );
}

export default PostsSection;
