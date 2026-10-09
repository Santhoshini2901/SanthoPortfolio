// Reusable heading: small numbered label + large serif title + metal rule.
export default function SectionHeading({ number, label, title, intro }) {
  return (
    <header className="section-heading">
      <p className="section-label">
        <span className="section-number">{number}</span>
        {label}
      </p>
      <h2 id={`${label.toLowerCase()}-title`}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
      <span className="metal-rule" aria-hidden="true" />
    </header>
  )
}
