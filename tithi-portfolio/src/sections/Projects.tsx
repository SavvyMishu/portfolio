
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <p className="section-label">MY RECENT WORK</p>

        <h2>
          Selected <span>Projects</span>
        </h2>

        <p className="section-description">
          A collection of projects that reflect my learning,
          creativity and journey in software development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <span className="project-number">
                PROJECT 0{index + 1}
              </span>

              <span
                className={`project-status status-${project.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {project.status}
              </span>
            </div>

            <div className="project-card-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.technologies.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="project-card-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
