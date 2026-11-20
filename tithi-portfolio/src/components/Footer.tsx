
import { contactInfo } from "../data/contact";
import { navigationLinks } from "../data/navigation";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            TB<span>.</span>
          </a>

          <p>
            Building practical software solutions through
            continuous learning and creativity.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>Quick Links</h3>

          <ul>
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect With Me</h3>

          {contactInfo.email && (
            <a href={`mailto:${contactInfo.email}`}>
              Email ↗
            </a>
          )}

          {contactInfo.github && (
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {contactInfo.linkedin && (
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Tithi Bala. All rights reserved.</p>
        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
