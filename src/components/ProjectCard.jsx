import { Github, ExternalLink } from 'lucide-react'

// One reusable project card. Edit the content in data/projects.js.
function LinkButton({ href, icon: Icon, label, title }) {
  if (href) {
    return (
      <a className="btn btn-outline btn-small" href={href} target="_blank" rel="noopener noreferrer">
        <Icon size={15} aria-hidden="true" /> {label}
      </a>
    )
  }
  return (
    <span
      className="btn btn-disabled btn-small"
      role="note"
      aria-label={`${title}: ${label} link coming soon`}
    >
      <Icon size={15} aria-hidden="true" /> {label} link coming soon
    </span>
  )
}

export default function ProjectCard({ project }) {
  const statusClass = project.status.toLowerCase().replace(/\s+/g, '-')
  return (
    <article className="card project-card">
      <div className="project-top">
        <h3>{project.title}</h3>
        <span className={`status status-${statusClass}`}>{project.status}</span>
      </div>
      <p>{project.description}</p>

      {project.features?.length > 0 && (
        <>
          <p className="mini-label">{project.featuresLabel || 'Features'}</p>
          <ul className="feature-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </>
      )}

      {project.goal && <p className="project-goal">{project.goal}</p>}

      <ul className="tag-list" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>

      <div className="button-row project-buttons">
        <LinkButton href={project.github} icon={Github} label="GitHub Repository" title={project.title} />
        <LinkButton href={project.demo} icon={ExternalLink} label="Live Demo" title={project.title} />
      </div>
    </article>
  )
}
