import { getCachedExperience } from '@/lib/api';
import type { Experience } from '@/lib/types';

export default async function ExperienceCompanyProjectsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const slug = id;

  let experience: Experience | null = null;
  
  try {
    experience = await getCachedExperience(slug);
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

  if (!experience) {
    return <div className="p-5">Loading...</div>;
  }

  return (
    <div className="mt-4">
      {experience.projects && experience.projects.length > 0 ? (
        <div className="flex flex-col gap-y-8">
          {experience.projects.map((project, index) => (
            <div 
              key={index}
            >
              <h2 className="text-2xl font-bold">{project.project_name}</h2>
              <div className="text-md text-justify whitespace-pre-line">
                {project.project_about}
              </div>
              </div>

          ))}
        </div>
      ) : (
        <p className="text-gray-500">No company projects added (yet).</p>
      )}
    </div>
  );
}
