
import { profile } from "../data/profile";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          HELLO, I'M {profile.name.toUpperCase()}
        </p>

        <h1>
          Turning Ideas
          <br />
          Into Practical
          <br />
          <span>Software Solutions.</span>
        </h1>

        <p className="hero-description">
          {profile.introduction}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            VIEW MY WORK →
          </a>

          <a href="#about" className="btn-secondary">
            ABOUT ME
          </a>
        </div>

        <p className="scroll-text">
          SCROLL TO EXPLORE ↓
        </p>
      </div>

      <div className="hero-image">
        <div className="photo-placeholder">
          <span>TB</span>
          <p>YOUR PHOTO GOES HERE</p>
          <small>Professional portrait coming soon</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;
