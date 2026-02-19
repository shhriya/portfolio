function ExperienceItem({ role, company, period, location, bullets }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-card card">
        <h3 className="card-title">
          {role} · {company}
        </h3>
        <div className="experience-meta">
          <span>{period}</span>
          <span>{location}</span>
        </div>
        <ul className="experience-bullets">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;

