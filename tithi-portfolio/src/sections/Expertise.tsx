
import { expertiseItems } from "../data/skills";

function Expertise() {
  return (
    <section id="expertise" className="expertise section">
      <div className="section-heading">
        <p className="section-label">WHAT I WORK ON</p>

        <h2>
          Skills & <span>Expertise</span>
        </h2>

        <p className="section-description">
          Building a strong foundation in software development
          through continuous learning and practical experience.
        </p>
      </div>

      <div className="expertise-grid">
        {expertiseItems.map((item, index) => (
          <article className="expertise-card" key={item.title}>
            <span className="expertise-number">
              0{index + 1}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className="expertise-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
