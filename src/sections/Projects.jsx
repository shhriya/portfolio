import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import projectsData from '../data/projects.json';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
        />

        <div className="cards-grid" style={{ marginTop: '0.75rem' }}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

