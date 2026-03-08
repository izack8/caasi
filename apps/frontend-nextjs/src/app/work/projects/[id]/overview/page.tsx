import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import { getCachedProject } from '@/lib/api';
import type { Project } from '@/lib/types';

export default async function ProjectOverviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const slug = id;

  let project: Project | null = null;
  
  try {
    project = await getCachedProject(slug);
  } catch (error) {
    project = {
      id: "not-found",
      slug: "not-found",
      title: "something bad happened/i didn't make this project! :(",
      description: "not found",
      year: "2024",
      what_i_learnt: "i have other cool projects you can check out!!! :)",
      technologies: [],
      url: {
        live: "",
        github: "",
        blog_post: ""
      },
      www: {
        what: "but anyways, 1/3 site secrets found! hehe",
        why: "i'm writing this at 3am, so i have no idea what to put here lol",
        who: "67"
      },
      timeline: [{"timeline_date": "hehe", "timeline_description": "ok bye"}]
    };
  }

  if (!project) {
    return <div className="p-5">Loading...</div>;
  }

  return (
    <div className="mb-4 flex flex-col gap-y-4 mt-4">
      <div className="flex flex-col gap-y-4 text-justify">

        <div>
          <h2 className="text-xl font-semibold">Abstract</h2>
          <div className="text-justify">
            <MarkdownRenderer>{project.what_i_learnt}</MarkdownRenderer>
          </div>
        </div>


        {[
          { title: 'What', content: project?.www.what },
          { title: 'Why', content: project?.www.why },
          { title: 'Who', content: project?.www.who }
        ].map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-justify">{section.content || ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
