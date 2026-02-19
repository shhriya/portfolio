import SectionTitle from '../components/SectionTitle.jsx';
import aboutData from '../data/about.json';

function About() {
  const { sectionTitle, summary, points, techHighlight } = aboutData;

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div>
          <SectionTitle
            eyebrow={sectionTitle.eyebrow}
            title={sectionTitle.title}
            subtitle={sectionTitle.subtitle}
          />
          <p className="about-summary">
            {summary}
          </p>
          <div className="about-points">
            {points.map((text) => (
              <div key={text} className="about-point">
                <div className="about-point-icon">✓</div>
                <p className="about-point-text">{text}</p>
              </div>
            ))}
          </div>
          <p className="about-tech-highlight">
            <strong>{techHighlight.label}</strong> {techHighlight.value}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

