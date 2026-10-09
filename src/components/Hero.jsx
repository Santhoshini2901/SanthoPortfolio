import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

// Finds src/assets/profile.png (or .jpg/.jpeg/.webp) automatically.
// If no photo file exists, a placeholder with your initial is shown.
const photos = import.meta.glob('../assets/profile.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const photoUrl = Object.values(photos)[0]

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">{profile.degree}</p>
          <h1 id="hero-title">
            <span className="hero-hi">Hi, I'm</span>
            <span className="metal-text hero-name">{profile.name}</span>
          </h1>
          <p className="hero-subtitle">{profile.title}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="button-row">
            <a className="btn btn-primary" href="#projects">
              View My Projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="btn btn-outline" href="#contact">
              <Mail size={16} aria-hidden="true" /> Contact Me
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={`Portrait of ${profile.name}`}
                width="900"
                height="900"
              />
            ) : (
              <div className="photo-placeholder" role="img" aria-label="Profile photo placeholder">
                <span>{profile.firstName[0]}</span>
                <small>Add your photo at<br />src/assets/profile.png</small>
              </div>
            )}
          </div>
          <p className="photo-caption">
            {profile.year} CSE · {profile.location}
          </p>
        </div>
      </div>
    </section>
  )
}
