import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          number="03"
          label="Projects"
          title="Things I'm building"
          intro="These projects are works in progress. Each card shows its real status."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
