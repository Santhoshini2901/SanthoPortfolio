// ============================================================
//  PROFILE — the main place to edit your personal details.
//  Anything marked "REPLACE" is a placeholder.
// ============================================================

export const profile = {
  name: 'Santhoshini M',
  firstName: 'Santhoshini',
  title: 'Computer Science Engineering Student | Aspiring Software Developer',
  intro:
    'I am a passionate Computer Science Engineering student interested in software development, web technologies, and AI-powered applications. I enjoy learning new technologies, building practical projects, and continuously improving my technical and problem-solving skills.',
  degree: 'B.E. Computer Science and Engineering',
  college: 'VSB College of Engineering Technical Campus',
  year: '3rd Year',
  location: 'Tamil Nadu, India',
  goal: 'Software Developer / Full Stack Developer',

  // REPLACE these three with your real details.
  email: 'YOUR-EMAIL@example.com',
  github: 'https://github.com/YOUR-GITHUB-USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME',

  about: [
    'I am a third-year Computer Science and Engineering student working towards a career in software development.',
    'I am building my programming, web development, database, and problem-solving skills through hands-on projects and continuous learning.',
  ],
  strengths: [
    'Quick learner',
    'Problem-solving mindset',
    'Willingness to learn new technologies',
    'Continuous self-improvement',
  ],
}

// Helper: true while a value is still a placeholder.
export const isPlaceholder = (value = '') =>
  value.includes('YOUR-') || value.includes('example.com')
