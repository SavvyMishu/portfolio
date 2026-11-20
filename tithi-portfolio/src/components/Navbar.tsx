
import { useState } from "react";
import { navigationLinks } from "../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">Tithi Bala</a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          id="main-navigation"
          className={`navbar-links ${menuOpen ? "active" : ""}`}
        >
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a href="#contact" className="navbar-cta">
          Let's Talk <span>↗</span>
        </a>

      </nav>
    </header>
  );
}

export default Navbar;
