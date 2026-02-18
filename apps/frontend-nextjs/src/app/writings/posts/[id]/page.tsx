import BackButton from '@/components/ui/BackButton';
import MotionWrapper from '@/components/ui/MotionWrapper';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { getCachedPost } from '@/lib/api';
import { Post } from '@/lib/types';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  
  let post : Post = {

    id: "post-not-found",
    title: "ahhh! i haven't finished writing this post!",
    description: "but it's coming soooooooon!!!",
    date: "1998-12-08",
    content: "found 1/3 site secrets, tho. hehe.",
    type: "Extras",
    tags: []

  };

  try {
    post = await getCachedPost(id);
  } catch (err) {
    console.error("Error fetching post:", err);
  }


  return (
    <>
    <BackButton section='writings'/>

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
