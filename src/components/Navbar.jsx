import { useState } from 'react';
import Button from './Button.jsx';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    handleNavClick('home');
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={handleLogoClick}>
          SK
        </a>

        <nav
          className={`navbar-links ${
            menuOpen ? 'navbar-links--open' : ''
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="navbar-link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className={`navbar-toggle ${
            menuOpen ? 'navbar-toggle--open' : ''
          }`}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggle-icon" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

