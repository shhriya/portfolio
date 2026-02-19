import SectionTitle from '../components/SectionTitle.jsx';
import skillsData from '../data/skills.json';

function Skills() {
  const { primary = [], secondary = [] } = skillsData;

  return (
    <section id="skills" className="section section--muted">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="A snapshot of the tools and technologies I use most frequently in data engineering work."
        />

        <div className="skills-grid">
          <article className="skills-card">
            <h3 className="skills-card-title">Primary skills</h3>
            <p className="skills-card-caption">
              Core technologies I work with day-to-day.
            </p>
            <div className="pill-row">
              {primary.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="skills-card">
            <h3 className="skills-card-title">Secondary skills</h3>
            <p className="skills-card-caption">
              Complementary tools and platforms I&apos;ve used across
              projects.
            </p>
            <div className="pill-row">
              {secondary.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;

