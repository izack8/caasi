import SectionLabel from '@/components/ui/SectionLabel';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { getCachedExperiences } from '@/lib/api';
import Link from 'next/link';

async function ExperiencesSection() {

  const experiences = await getCachedExperiences();

  return (
    
    <section className="experiences-section w-full flex flex-col">
      
      <SectionLabel label="Experiences" />
       <div className="flex flex-col gap-y-5">

      {experiences.length === 0 && <div className="text-center">No experiences found</div>}

      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} index={index} />
      ))}
      </div>
    </section>
  );
}


export default ExperiencesSection;

export function ExperienceCard({ experience, index }: { experience: any, index?: number }) {
  return (

    <Link
      key={index}
      href={`/work/experiences/${experience.slug}`}
      className='experience lg:flex lg:flex-wrap items-start rounded-lg transition-all duration-300 group lg:hover:bg-white/20 lg:bg-transparent border border-white/80 lg:border-transparent p-4'>

        <div className='flex flex-col gap-y-2'>

            <h1 className='text-blue-900 text-xl font-bold group-hover:text-blue-500 transition-all duration-300'>{experience.title}
            </h1>

            <h2 className="text-md w-full flex items-end transition-colors duration-200 text-lg font-semibold">
                {experience.company}
            </h2>
            
            <div className='durationandlocation flex flex-row font-semibold text-md gap-7 items-center'>
              <span className='flex flex-row items-center gap-2'>
                <FaCalendar className='w-3 h-3'/>
                {experience.duration}
              </span>
              <span className='flex flex-row items-center gap-2'>
                <FaMapMarkerAlt className='w-3 h-3'/>
                {experience.location}
                </span>
          </div>
          
          <p className="text-md text-justify" dangerouslySetInnerHTML={{ __html: experience.description }} />
        </div>
      </Link>
  )};