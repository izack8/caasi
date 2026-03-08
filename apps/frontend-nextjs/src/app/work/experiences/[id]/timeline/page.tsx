import Timeline from '@/components/ui/Timeline';
import { getCachedExperience } from '@/lib/api';
import type { Experience } from '@/lib/types';

export default async function ExperienceTimelinePage({ params }: { params: Promise<{ id: string }> }) {
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
      timeline: [{"timeline_date": "hehe", "timeline_description": "ok bye"}]
    };
  }

  if (!experience) {
    return <div className="p-5">Loading...</div>;
  }

  return (
    <div className="mt-4">
        <Timeline timelineData={experience.timeline || []} />
    </div>
  );
}
