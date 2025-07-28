import { useState, useEffect } from 'react';
import SectionLabel from '../ui/SectionLabel';


function ExperiencesSection() {

  const [experiences, setExperiences] = useState([]);
  // define custom loading and error states next time

  useEffect(() => {
    fetch('https://isaachehe.azurewebsites.net/api/experiences').then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      setExperiences(data);
    }).catch(error => {
      console.error('Error fetching experiences:', error);
    });
  }, []);

  return (
    
    <section className="experiences-section w-full flex flex-wrap">
      <SectionLabel label="Experiences" />
      {experiences.map((experience, index) => (
        <div key={index} className='experience mb-3 lg:flex lg:flex-wrap items-start hover:shadow-lg duration-300'>
          <div className='year font-bold text-sm lg:h-full lg:w-2/7 text-black-400 mt-1.5'>
          {experience.duration}
        </div>
        <div className='desc h-full lg:w-5/7 justify-start'>
          <h2 className='text-gray-500 text-[20px] font-bold mb-1'><a href={experience.link}>{experience.company}</a></h2>
          <h3 className='text-md text-gray-700 font-bold'>{experience.location}</h3>
          <h3 className='text-md text-rose-500 font-bold'>{experience.title}</h3>
          <p className='justify-start' dangerouslySetInnerHTML={{ __html: experience.description }} />
        </div>
        </div>
      ))}
    </section>
  );
}


export default ExperiencesSection;