import SectionHeading from './SectionHeading.jsx'
import Timeline from './Timeline.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data/education.js'

export default function Education() {
  const items = education.map((e) => ({
    id: e.id,
    meta: e.years,
    heading: e.title,
    subheading: e.place,
    tag: [e.detail, e.note].filter(Boolean).join(' · '),
    points: [],
  }))
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading number="06" label="Education" title="Academic background" />
        <Reveal>
          <Timeline items={items} />
        </Reveal>
      </div>
    </section>
  )
}
