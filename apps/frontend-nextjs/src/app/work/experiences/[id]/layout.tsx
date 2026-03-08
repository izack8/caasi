import MotionWrapper from '@/components/ui/MotionWrapper';
import { FaExternalLinkAlt, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import BackButton from '@/components/ui/BackButton';
import { getCachedExperience } from '@/lib/api';
import type { Experience } from '@/lib/types';
import Link from 'next/link';
import ExperienceTabs from '@/components/ExperienceTabs';

export default async function ExperienceLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
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
    <>
      <BackButton section="work" />
      <MotionWrapper id="experience-detail">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-3xl font-semibold">{experience.title}</h1>

            {experience.link && (
              <Link 
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:text-rose-500 transition-colors duration-200 w-fit"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span className="text-lg font-semibold">{experience.company}</span>
              </Link>
            )}
            
            <div className="flex flex-row gap-x-6 text-md font-medium">
              <span className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                {experience.duration}
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4" />
                {experience.location}
              </span>
            </div>
          
          {experience.tags && experience.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <ExperienceTabs experienceId={slug} />

          {children}
        </div>
      </MotionWrapper>
    </>
  );
}
