import SectionTitle from '../components/SectionTitle.jsx';
import contactData from '../data/contact.json';

function Contact() {
  const { sectionTitle, items } = contactData;

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div>
          <SectionTitle
            eyebrow={sectionTitle.eyebrow}
            title={sectionTitle.title}
          />
          
          <div className="contact-meta">
            {items.map((item) => {
              const isExternal = /^https?:\/\//i.test(item.href);
              return (
                <div key={item.label} className="contact-meta-item">
                  <span className="contact-meta-label">{item.label}</span>
                  <span className="contact-meta-value">
                    <a
                      href={item.href}
                      className="contact-meta-link"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

