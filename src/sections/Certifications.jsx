import SectionTitle from '../components/SectionTitle.jsx';
import certificationsData from '../data/certifications.json';

function Certifications() {
  return (
    <section id="certifications" className="section section--muted">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Certifications"
          title="Professional certifications"
        />

        <div className="cards-grid cards-grid--two">
          {certificationsData.map((cert) => (
            <article key={cert.id} className="card">
              <div className="card-header">
                <h3 className="card-title">{cert.name}</h3>
                <span className="card-pill">
                  {cert.issuer}
                  {cert.year ? ` · ${cert.year}` : ''}
                </span>
              </div>
              {cert.focus && (
                <p className="card-body">{cert.focus}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

