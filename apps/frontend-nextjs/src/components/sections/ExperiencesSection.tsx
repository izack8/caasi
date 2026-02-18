import SectionLabel from '@/components/ui/SectionLabel';
import { FaExternalLinkAlt, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { getCachedExperiences } from '@/lib/api';

async function ExperiencesSection() {

  const experiences = await getCachedExperiences();

  return (
    
    <section className="experiences-section w-full flex flex-col">
      
      <SectionLabel label="Experiences" />
       <div className="flex flex-col gap-y-7">

      {experiences.length === 0 && <div className="text-center">No experiences found</div>}
      {experiences.map((experience, index) => (
        <div key={index} className='experience lg:flex lg:flex-wrap items-start duration-300 transition-all duration-300 group'>
        <div className='flex flex-col gap-y-2'>

            <h1 className='text-blue-900 text-xl font-bold group-hover:text-blue-500 transition-all duration-300'>{experience.title}
            </h1>

            <h2 className="text-md w-full flex items-end hover:text-rose-500 transition-colors duration-200">
            <a className="flex flex-row gap-2 text-lg items-center group/link font-semibold" href={experience.link} target="_blank" rel="noopener noreferrer">
                {experience.company}
                <FaExternalLinkAlt className="w-3 h-3 group-hover:text-rose-500 group-hover:w-4 group-hover:h-4 group-hover/link:w-5 group-hover/link:h-5 transition-all duration-200" />
            </a>
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
        
      </div>
      
      ))}
      </div>
    </section>
  );
}


export default ExperiencesSection;