
import { contactInfo } from "../data/contact";

function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-content">
        <p className="section-label">GET IN TOUCH</p>

        <h2>{contactInfo.heading}</h2>

        <p className="contact-description">
          {contactInfo.description}
        </p>

        <div className="contact-actions">
          {contactInfo.email && (
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-primary"
            >
              Let's Talk <span>↗</span>
            </a>
          )}

          {contactInfo.github && (
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              GitHub Profile ↗
            </a>
          )}

          {contactInfo.linkedin && (
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              LinkedIn ↗
            </a>
          )}
        </div>

        <p className="contact-email">
          {contactInfo.email}
        </p>
      </div>
    </section>
  );
}

export default Contact;
