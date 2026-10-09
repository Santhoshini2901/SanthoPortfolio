import SectionHeading from './SectionHeading.jsx'
import Timeline from './Timeline.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  const items = experience.map((e) => ({
    id: e.id,
    meta: e.dates,
    heading: e.company,
    subheading: e.role,
    tag: e.duration ? `Duration: ${e.duration}` : '',
    points: e.points,
  }))
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          number="04"
          label="Experience"
          title="Internships"
          intro="Short internships that built my Python and AI/ML foundations."
        />
        <Reveal>
          <Timeline items={items} />
        </Reveal>
      </div>
    </section>
  )
}
