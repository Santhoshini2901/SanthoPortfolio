import { useEffect, useRef, useState } from 'react'
import { Award, BadgeCheck, X } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { certificates } from '../data/certificates.js'

// Any picture you drop into src/assets/certificates/ is picked up here.
// In certificates.js just write the file name, e.g. image: 'infosys-dsa.jpg'
const files = import.meta.glob('../assets/certificates/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const imageFor = (name) => {
  if (!name) return ''
  const key = Object.keys(files).find((k) => k.endsWith(`/${name}`))
  return key ? files[key] : ''
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)

  // Open / close the native <dialog> to match state.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selected && !dialog.open) dialog.showModal()
    if (!selected && dialog.open) dialog.close()
  }, [selected])

  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHeading
          number="05"
          label="Certificates"
          title="Certificates and learning"
          intro="Courses, internships, and events. Certificate images and verification links are added as I collect them."
        />

        <div className="cert-grid">
          {certificates.map((cert, i) => {
            const img = imageFor(cert.image)
            return (
              <Reveal key={cert.id} className="card cert-card" delay={(i % 3) * 70}>
                {img ? (
                  <button
                    type="button"
                    className="cert-thumb"
                    onClick={() => setSelected({ ...cert, img })}
                    aria-label={`View ${cert.title} certificate larger`}
                  >
                    <img src={img} alt={`${cert.title} certificate from ${cert.issuer}`} loading="lazy" />
                  </button>
                ) : (
                  <div className="cert-thumb cert-placeholder" role="img" aria-label="Certificate image placeholder">
                    <Award size={30} aria-hidden="true" />
                    <span>Certificate image placeholder</span>
                  </div>
                )}
                <div className="cert-body">
                  <p className="cert-issuer">{cert.issuer}</p>
                  <h3>{cert.title}</h3>
                  {cert.verifyUrl ? (
                    <a className="text-link" href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <BadgeCheck size={15} aria-hidden="true" /> Verify certificate
                    </a>
                  ) : (
                    <span className="muted-note">Verification link: add in certificates.js</span>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === dialogRef.current && setSelected(null)}
        aria-label={selected ? `${selected.title} certificate` : 'Certificate preview'}
      >
        {selected && (
          <div className="lightbox-inner">
            <button type="button" className="icon-button lightbox-close" onClick={() => setSelected(null)} aria-label="Close preview">
              <X size={18} />
            </button>
            <img src={selected.img} alt={`${selected.title} certificate from ${selected.issuer}`} />
            <p>{selected.issuer}: {selected.title}</p>
          </div>
        )}
      </dialog>
    </section>
  )
}
