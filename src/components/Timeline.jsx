// Reusable vertical timeline. Pass items shaped like:
// { id, heading, subheading, meta, tag, points: [] }
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id} className="timeline-item">
          <span className="timeline-dot" aria-hidden="true" />
          <div className="card timeline-card">
            <p className="timeline-meta">{item.meta}</p>
            <h3>{item.heading}</h3>
            {item.subheading && <p className="timeline-sub">{item.subheading}</p>}
            {item.tag && <p className="timeline-tag">{item.tag}</p>}
            {item.points?.length > 0 && (
              <ul className="timeline-points">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
