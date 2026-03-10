import { getCachedExperience } from '@/lib/api';
import { CollapsibleProject } from '@/components/ui/CollapsibleProject';

export default async function ExperienceCompanyProjectsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  let experience;
  try {
    experience = await getCachedExperience(id);
  } catch (error) {
    experience = {
      id: "not-found",
      slug: "not-found",
      title: "something bad happened/i didn't make this experience! :(",
      description: "not found",
      location: "somewhere on earth",
      company: "not found",
      duration: "2024",
      tags: [],
      link: "",
      timeline: [{"timeline_date": "hehe", "timeline_description": "ok bye"}],
      projects: []
    };
  }

  return (
    <div className="mt-4">
      {experience.projects && experience.projects.length > 0 ? (
        <div className="flex flex-col gap-y-6">
          {experience.projects.map((project, index) => (
            <CollapsibleProject key={index} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No company projects added (yet).</p>
      )}
    </div>
  );
}
