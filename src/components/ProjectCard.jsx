function ProjectCard({ project }) {
  const { title, type, description, techStack, githubUrl, liveUrl } = project;

  return (
    <article className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-pill">{type}</span>
      </div>
      <p className="card-body">{description}</p>
      <div className="card-footer">
        <div className="pill-row text-xs text-muted">
          {techStack.map((tech) => (
            <span key={tech} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer" style={{ marginTop: '0.85rem' }}>
        <div className="card-links">
          <a
            href={githubUrl}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-link-icon">⧉</span>
            <span>GitHub</span>
          </a>
          <a
            href={liveUrl}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="card-link-icon">↗</span>
            <span>Live demo</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

