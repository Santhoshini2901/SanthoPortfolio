import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading number="01" label="About" title="A student developer, still building" />
        <div className="about-grid">
          <Reveal className="about-text">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="about-goal">
              <strong>Career goal:</strong> {profile.goal}
            </p>
          </Reveal>
          <Reveal className="card strengths" delay={100}>
            <h3>Strengths</h3>
            <ul>
              {profile.strengths.map((s) => (
                <li key={s}>
                  <Check size={16} aria-hidden="true" /> {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
