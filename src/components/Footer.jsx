function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-meta">
          <span>© {year} Shriya K. All rights reserved.</span>
          <span>Built with React.</span>
        </div>
        <div className="footer-links">
          <a
            href="mailto:your.email@example.com"
            className="footer-link"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

