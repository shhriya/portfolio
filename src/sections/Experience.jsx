import SectionTitle from '../components/SectionTitle.jsx';
import ExperienceItem from '../components/ExperienceItem.jsx';
import experienceData from '../data/experience.json';

function Experience() {
  return (
    <section id="experience" className="section section--muted">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Experience"
          title="Professional background"
          subtitle="Recent role focused on building and supporting modern data workflows."
        />

        <div className="timeline">
          {experienceData.map((item) => (
            <ExperienceItem
              key={item.id}
              role={item.role}
              company={item.company}
              period={item.period}
              location={item.location}
              bullets={item.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

