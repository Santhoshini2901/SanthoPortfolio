import { Github, Linkedin } from 'lucide-react'
import { navLinks } from './Navbar.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-credit">Designed and developed by {profile.name.replace(' ', '\u00A0')}</p>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-social">
          <a className="icon-button" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Github size={18} />
          </a>
          <a className="icon-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
