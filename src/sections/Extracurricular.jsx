import SectionTitle from '../components/SectionTitle.jsx';
import activitiesData from '../data/activities.json';

function Extracurricular() {
  return (
    <section id="extra" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Beyond work"
          title="Extracurriculars & leadership"
        />

        <div className="cards-grid cards-grid--two">
          {activitiesData.map((activity) => (
            <article key={activity.id} className="card">
              <div className="card-header">
                <h3 className="card-title">{activity.title}</h3>
                <span className="card-pill">
                  {activity.role}
                  {activity.period ? ` · ${activity.period}` : ''}
                </span>
              </div>
              {activity.description && (
                <p className="card-body">{activity.description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Extracurricular;

