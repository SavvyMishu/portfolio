
import { researchItems } from "../data/research";

function Research() {
  return (
    <section id="research" className="research-section section">
      <div className="section-heading">
        <p className="section-label">RESEARCH & INNOVATION</p>

        <h2>
          Academic <span>Research</span>
        </h2>

        <p className="section-description">
          Exploring research-driven approaches to solve
          meaningful problems through computer science.
        </p>
      </div>

      <div className="research-list">
        {researchItems.map((item, index) => (
          <article className="research-card" key={item.title}>
            <div className="research-card-header">
              <span className="research-number">
                RESEARCH 0{index + 1}
              </span>

              <span className="research-status">
                {item.status}
              </span>
            </div>

            <div className="research-card-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>

            <div className="research-card-footer">
              <span>Bangla Sign Language</span>
              <span>Academic Research ↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Research;
