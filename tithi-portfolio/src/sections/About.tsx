
import { aboutInfo } from "../data/about";

function About() {
  return (
    <section id="about" className="about-section section">
      <div className="about-content">
        <p className="section-label">GET TO KNOW ME</p>

        <h2>
          A Little More
          <br />
          <span>About Me.</span>
        </h2>

        <p className="about-description">
          {aboutInfo.introduction}
        </p>

        <p className="about-description">
          I enjoy learning new technologies, solving problems,
          and turning ideas into practical software applications.
          My goal is to grow as a software engineer through
          continuous learning and hands-on experience.
        </p>

        <div className="about-focus">
          <span>WHAT DRIVES ME</span>
          <p>
            Curiosity · Problem Solving · Creativity · Continuous Learning
          </p>
        </div>
      </div>

      <div className="about-highlight">
        <span className="about-highlight-number">01</span>
        <p className="section-label">MY APPROACH</p>
        <h3>Learn. Build. Improve.</h3>
        <p>
          I believe in learning by building real projects,
          understanding the fundamentals, and improving
          with every challenge.
        </p>
      </div>
    </section>
  );
}

export default About;
