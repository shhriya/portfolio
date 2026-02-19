import { useEffect } from 'react';
import profileData from '../data/profile.json';
import aboutData from '../data/about.json';
import contactData from '../data/contact.json';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import skillsData from '../data/skills.json';
import certificationsData from '../data/certifications.json';
import activitiesData from '../data/activities.json';
import projectsData from '../data/projects.json';
import '../styles/resume.css';

export default function ResumePage() {
  const { hero } = profileData;
  const contact = contactData.items;

  useEffect(() => {
    document.title = `Resume — ${hero.name}`;
  }, [hero.name]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      <div className="resume-actions no-print">
        <button type="button" className="resume-download-btn" onClick={handlePrint}>
          Save as PDF / Print
        </button>
      </div>

      <article className="resume">
        <header className="resume-header">
          <h1 className="resume-name">{hero.name}</h1>
          <p className="resume-title">{hero.role}</p>
          <p className="resume-location">{hero.locationLine}</p>
          <div className="resume-contact">
            {contact.map((item) => (
              <span key={item.label} className="resume-contact-item">
                <strong>{item.label}:</strong>{' '}
                <a href={item.href} target="_blank" rel="noreferrer" className="resume-link">
                  {item.value}
                </a>
              </span>
            ))}
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <p className="resume-summary">{aboutData.summary}</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          {experienceData.map((job) => (
            <div key={job.id} className="resume-job">
              <div className="resume-job-header">
                <h3 className="resume-job-role">{job.role}</h3>
                <span className="resume-job-period">{job.period}</span>
              </div>
              <p className="resume-job-company">{job.company} · {job.location}</p>
              {job.bullets && job.bullets.length > 0 && (
                <ul className="resume-bullets">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          {educationData.map((edu) => (
            <div key={edu.id} className="resume-edu">
              <div className="resume-edu-header">
                <h3 className="resume-edu-level">{edu.level}{edu.field ? ` · ${edu.field}` : ''}</h3>
                <span className="resume-edu-period">{edu.period}</span>
              </div>
              <p className="resume-edu-institution">{edu.institution}</p>
              {Array.isArray(edu.details) && edu.details.length > 0 && (
                <p className="resume-edu-details">{edu.details.join(' · ')}</p>
              )}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <p className="resume-skills-primary">
            <strong>Primary:</strong> {skillsData.primary?.join(', ')}
          </p>
          {skillsData.secondary?.length > 0 && (
            <p className="resume-skills-secondary">
              <strong>Secondary:</strong> {skillsData.secondary.join(', ')}
            </p>
          )}
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Certifications</h2>
          {certificationsData.map((cert) => (
            <div key={cert.id} className="resume-cert">
              <strong>{cert.name}</strong> — {cert.issuer}
              {cert.year ? ` (${cert.year})` : ''}
              {cert.focus && <p className="resume-cert-focus">{cert.focus}</p>}
            </div>
          ))}
        </section>

        {activitiesData?.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">Leadership & Extracurriculars</h2>
            {activitiesData.map((a) => (
              <div key={a.id} className="resume-activity">
                <strong>{a.title}</strong> — {a.role}
                {a.period ? ` (${a.period})` : ''}
                {a.description && <p className="resume-activity-desc">{a.description}</p>}
              </div>
            ))}
          </section>
        )}

        {projectsData?.length > 0 && (
          <section className="resume-section resume-section-projects">
            <h2 className="resume-section-title">Selected Projects</h2>
            {projectsData.map((project) => (
              <div key={project.id} className="resume-project">
                <h3 className="resume-project-title">{project.title}</h3>
                <p className="resume-project-desc">{project.description}</p>
              </div>
            ))}
          </section>
        )}
      </article>
    </div>
  );
}
