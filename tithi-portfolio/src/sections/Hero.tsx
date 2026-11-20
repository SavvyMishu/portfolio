import { profile } from "../data/profile";
import profileImage from "../assets/tithi-profile.jpg";

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
        <img
          src={profileImage}
          alt="Portrait of Tithi Bala"
          className="hero-portrait"
        />
      </div>
    </section>
  );
}

export default Hero;

