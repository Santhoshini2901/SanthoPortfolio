import { Code2, Globe, Wrench, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { skillGroups } from '../data/skills.js'

const icons = { code: Code2, globe: Globe, wrench: Wrench, sparkles: Sparkles }

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          number="02"
          label="Skills"
          title="What I work with"
          intro="Skills I use and am still growing. Items marked Basic or Learning are exactly that."
        />
        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] || Code2
            return (
              <Reveal key={group.title} className="card skill-card" delay={i * 70}>
                <div className="card-icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3>{group.title}</h3>
                <ul className="badge-list">
                  {group.items.map((item) => (
                    <li key={item} className="badge">{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
