import { useState } from 'react'
import { Mail, Github, Linkedin, Send, AlertCircle, Info, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile, isPlaceholder } from '../data/profile.js'

// ------------------------------------------------------------
//  CONTACT FORM SETUP
//  Static websites cannot send email by themselves. To make the form
//  really send messages:
//    1. Create a free form at https://formspree.io  (or use EmailJS)
//    2. Paste your form URL below, e.g. 'https://formspree.io/f/abcdwxyz'
//  While this is '' the form only validates, and it says clearly that
//  nothing was sent.
// ------------------------------------------------------------
const FORM_ENDPOINT = ''

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid email address, like name@example.com.'
  if (!values.subject.trim()) errors.subject = 'Enter a subject.'
  if (!values.message.trim()) errors.message = 'Write a message.'
  else if (values.message.trim().length < 10) errors.message = 'Write at least 10 characters.'
  return errors
}

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  // status: idle | sending | sent | error | not-configured
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      // Move focus to the first field with a problem.
      const first = Object.keys(found)[0]
      document.getElementById(`contact-${first}`)?.focus()
      return
    }

    if (!FORM_ENDPOINT) {
      setStatus('not-configured')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
    `${values.message}\n\nFrom: ${values.name} (${values.email})`
  )}`

  const field = (id, label, props = {}) => (
    <div className={`field ${errors[id] ? 'has-error' : ''}`}>
      <label htmlFor={`contact-${id}`}>{label}</label>
      {props.as === 'textarea' ? (
        <textarea
          id={`contact-${id}`}
          name={id}
          rows="5"
          value={values[id]}
          onChange={handleChange}
          aria-invalid={errors[id] ? 'true' : 'false'}
          aria-describedby={errors[id] ? `err-${id}` : undefined}
        />
      ) : (
        <input
          id={`contact-${id}`}
          name={id}
          type={props.type || 'text'}
          autoComplete={props.autoComplete}
          value={values[id]}
          onChange={handleChange}
          aria-invalid={errors[id] ? 'true' : 'false'}
          aria-describedby={errors[id] ? `err-${id}` : undefined}
        />
      )}
      {errors[id] && (
        <p className="field-error" id={`err-${id}`}>
          <AlertCircle size={14} aria-hidden="true" /> {errors[id]}
        </p>
      )}
    </div>
  )

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          number="07"
          label="Contact"
          title="Let's connect"
          intro="I am looking for internship and entry-level developer opportunities. Send a message or reach out on these links."
        />

        <div className="contact-grid">
          <Reveal className="contact-links">
            <a className="card contact-link" href={`mailto:${profile.email}`}>
              <Mail size={20} aria-hidden="true" />
              <span>
                <strong>Email</strong>
                <small>{profile.email}</small>
              </span>
            </a>
            <a className="card contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} aria-hidden="true" />
              <span>
                <strong>LinkedIn</strong>
                <small>{isPlaceholder(profile.linkedin) ? 'Placeholder: update in profile.js' : 'View profile'}</small>
              </span>
            </a>
            <a className="card contact-link" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} aria-hidden="true" />
              <span>
                <strong>GitHub</strong>
                <small>{isPlaceholder(profile.github) ? 'Placeholder: update in profile.js' : 'View profile'}</small>
              </span>
            </a>
          </Reveal>

          <Reveal className="card contact-form-card" delay={100}>
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              {field('name', 'Name', { autoComplete: 'name' })}
              {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
              {field('subject', 'Subject')}
              {field('message', 'Message', { as: 'textarea' })}

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                <Send size={16} aria-hidden="true" /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              <div className="form-status" role="status" aria-live="polite">
                {status === 'sent' && (
                  <p className="notice notice-success">
                    <CheckCircle2 size={16} aria-hidden="true" /> Message sent. Thank you, I will reply soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="notice notice-error">
                    <AlertCircle size={16} aria-hidden="true" /> The message could not be sent. Check your connection and try again, or email me directly.
                  </p>
                )}
                {status === 'not-configured' && (
                  <p className="notice notice-info">
                    <Info size={16} aria-hidden="true" />
                    <span>
                      Your details look valid, but nothing was sent: this form is not connected to an email service yet.{' '}
                      <a href={mailto}>Open your email app with this message</a> instead.
                    </span>
                  </p>
                )}
              </div>

              <p className="form-note">
                Note: this form needs an email service (such as EmailJS or Formspree) to send messages. See the README for setup.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
