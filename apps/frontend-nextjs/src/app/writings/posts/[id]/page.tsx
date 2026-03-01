import BackButton from '@/components/ui/BackButton';
import MotionWrapper from '@/components/ui/MotionWrapper';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { getCachedPost } from '@/lib/api';
import { Post } from '@/lib/types';
import Button from '@/components/ui/Button';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  
  let post : Post | null = null;

  try {
    post = await getCachedPost(id);
  } catch (err) {
      post = {

      id: "post-not-found",
      title: "something bad happened/i have not finished writing/this post does not exist (...yet?)",
      description: "check out my other posts, though!",
      date: "1998-12-08",
      content: "(found 1/3 site secrets. hehe.)",
      type: "Extras",
      tags: ["Site Secret"]

    };
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
            <Button key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
              {tag}
            </Button>
          ))}
        </div>
      )}
      
      <MarkdownRenderer>{post.content}</MarkdownRenderer>

    </MotionWrapper>
    </>
  );
}
