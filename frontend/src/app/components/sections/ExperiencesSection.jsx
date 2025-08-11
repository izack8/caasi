import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../config';
import SectionLabel from '../ui/SectionLabel';
import LoadingBar from '../../components/ui/LoadingBar';


function ExperiencesSection() {

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExperiences = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.experiences);
      const data = await res.json();
      console.log("Fetched experiences:", data);
      setExperiences(data);
      setLoading(false);
      sessionStorage.setItem('cachedExperiences', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching experiences:', error);
      setError(error.message);
      setLoading(true); 
    }
  };


  useEffect(() => {
    const cachedExperiences = sessionStorage.getItem('cachedExperiences');
    if (cachedExperiences) {
      setExperiences(JSON.parse(cachedExperiences));
      setLoading(false);
    } else {
      fetchExperiences();
    }
  }, []);

  return (
    
    <section className="experiences-section w-full flex flex-wrap">
      <SectionLabel label="Experiences" />
      {loading && <LoadingBar />}
      {!loading && experiences.length === 0 && <div className="text-center">No experiences found</div>}
      {experiences.map((experience, index) => (
        <div key={index} className='experience mb-10 lg:flex lg:flex-wrap items-start duration-300 transition-all duration-300 group relative'>
          <div className='year font-bold text-sm lg:h-full lg:w-2/7 text-black-400 mt-1.5'>
          {experience.duration}
        </div>
        <div className='desc h-full lg:w-5/7 text-justify'>
          <h2 className='text-[17px] font-bold group-hover:text-blue-500 transition-all duration-300'>{experience.title}</h2>
          <h3 className='text-md text-gray-700'>{experience.location}</h3>
          <h3 className='text-md text-rose-500'><a href={experience.link}>{experience.company}</a></h3>
          <p dangerouslySetInnerHTML={{ __html: experience.description }} />
        </div>
        </div>
      ))}
    </section>
  );
}


export default ExperiencesSection;