import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel';

function ProjectsSection({ showAll = false }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects from your API
    fetch('/api/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Fetching projects from API...');
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center">Loading projects...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  // Show only first 3 projects on home page, all on projects page
  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects-section">
      <SectionLabel label="My Projects" />

      <div className="projects-grid">
        {displayProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}
            
            <p className="text-sm text-gray-600 mb-2">
              <strong>Year:</strong> {project.year}
            </p>
            
            <div 
              className="text-lg mb-3" 
              dangerouslySetInnerHTML={{__html: project.description}} 
            />
            
            {project.points && (
              <ul className="text-lg mb-3 list-disc list-inside">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Learn more
              </a>
            )}
          </div>
        ))}
      </div>
      
      {!showAll && projects.length > 3 && (
        <div className="text-center mt-6">
          <Link 
            to="/projects" 
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View All Projects ({projects.length})
          </Link>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;