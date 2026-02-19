import { useState } from 'react';
import Button from '../components/Button.jsx';
import profileData from '../data/profile.json';
import profilePhoto from './profile.jpg';

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function Hero() {
  const { initials, hero } = profileData;
  const [showPhoto, setShowPhoto] = useState(true);
  const profilePhotoSrc = hero?.photoSrc ?? profilePhoto;

  const handleViewProjects = () => {
    scrollToSection(hero.primaryCta.scrollTo);
  };

  return (
    <section id="home" className="section hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-name">{hero.name}</h1>
          <p className="hero-role">{hero.role}</p>
          <p className="hero-tagline">{hero.tagline}</p>
          <div className="hero-actions">
            <Button variant="primary" onClick={handleViewProjects}>
              {hero.primaryCta.label}
            </Button>
            <a
              href="/resume"
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
              aria-label={hero.secondaryCta.ariaLabel}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="hero-meta">
            <span className="hero-highlight">
              <span className="hero-highlight-dot" />
              <span>{hero.status.text}</span>
            </span>
            <span>{hero.locationLine}</span>
          </div>
        </div>

        <div className="hero-visual">
          <aside className="hero-card" aria-hidden="true">
            <div>
              <div className="hero-avatar">
                {showPhoto ? (
                  <img
                    src={profilePhotoSrc}
                    alt={`${hero.name} profile`}
                    className="hero-avatar-img"
                    onError={() => setShowPhoto(false)}
                    loading="lazy"
                  />
                ) : (
                  <div className="hero-avatar-inner">{initials}</div>
                )}
              </div>
              <p className="hero-avatar-caption">{hero.name}</p>
            </div>
            <div className="hero-card-footer">
              <p>{hero.card.focusedOnLabel}</p>
              <div className="hero-card-pill-row">
                {hero.card.pills.map((pill) => (
                  <span key={pill} className="hero-card-pill">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;

