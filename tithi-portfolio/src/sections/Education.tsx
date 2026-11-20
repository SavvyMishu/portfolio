
import { educationItems } from "../data/education";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-heading">
          <p className="section-label">MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          {educationItems.map((item, index) => (
            <article className="education-row" key={item.institution}>
              <div className="education-icon">
                {index === 0 ? "BSc" : index === 1 ? "HSC" : "SSC"}
              </div>

              <div className="education-info">
                <span className="education-badge">
                  {index === 0 ? "UNDERGRADUATE" : index === 1 ? "HIGHER SECONDARY" : "SECONDARY"}
                </span>

                <h3>{item.institution}</h3>
                <p>{item.degree}</p>

                <div className="education-meta">
                  <span>{item.period}</span>
                  <span>{item.result}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
