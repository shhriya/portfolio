import SectionTitle from '../components/SectionTitle.jsx';
import educationData from '../data/education.json';

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Education"
          title="Academic background"
        />

        <div className="cards-grid cards-grid--one">
          {educationData.map((item) => (
            <article key={item.id} className="card">
              <div className="card-header">
                <h3 className="card-title">
                  {item.level}
                  {item.field ? ` · ${item.field}` : ''}
                </h3>
                <span className="card-pill">{item.period}</span>
              </div>
              <div className="card-body">
                <p className="text-strong">{item.institution}</p>
              </div>
              {Array.isArray(item.details) && item.details.length > 0 && (
                <ul className="experience-bullets">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

