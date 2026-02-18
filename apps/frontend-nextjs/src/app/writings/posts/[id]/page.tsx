import BackButton from '@/components/ui/BackButton';
import MotionWrapper from '@/components/ui/MotionWrapper';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { getCachedPost } from '@/lib/api';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  
  let post;
  let error = false;

  try {
    post = await getCachedPost(id);
  } catch (err) {
    console.error("Error fetching post:", err);
    error = true;
  }

  if (error || !post) {
    return <div className="p-5">Post not found</div>;
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
