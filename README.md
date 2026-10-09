# Santhoshini M | Portfolio Website

A responsive personal portfolio built with **React + Vite**, in a dark "luxury metal" theme with a light mode.
All your content lives in simple files inside `src/data/`, so you rarely need to touch the components.

---

## 1. Run it on your computer

You need **Node.js 18 or newer** (download the LTS version from https://nodejs.org). Check with `node -v`.

1. Unzip the project. You will get a folder called `portfolio`.
2. Open a terminal **inside that folder** (the one that contains `package.json`).
   - VS Code: *File → Open Folder → portfolio*, then *Terminal → New Terminal*.
   - Or in any terminal: `cd path/to/portfolio`
3. Run:

```bash
npm install
npm run dev
```

4. Open the address shown in the terminal (usually http://localhost:5173).
5. Stop the server any time with `Ctrl + C`.

Other commands (run in the same folder):

| Command | What it does |
| --- | --- |
| `npm run build` | Makes the final website in the `dist/` folder |
| `npm run preview` | Previews that final build locally |

---

## 2. Customize your details

| What to change | File |
| --- | --- |
| Email, GitHub, LinkedIn, intro text, strengths | `src/data/profile.js` |
| Skills | `src/data/skills.js` |
| Projects, status, GitHub and demo links | `src/data/projects.js` |
| Internship dates and details | `src/data/experience.js` |
| Certificates | `src/data/certificates.js` |
| CGPA, marks, school names, years | `src/data/education.js` |
| Colours | top of `src/styles/main.css` (`:root` blocks) |

**Profile photo:** replace `src/assets/profile.jpg` with your own photo (a `.png`, `.jpg`, `.jpeg` or `.webp` named `profile` works). A square or portrait photo with the face near the top looks best.

**Email / GitHub / LinkedIn:** anything still containing `YOUR-` is a placeholder. Replace it in `src/data/profile.js`.

**Projects:** paste the repository URL into `github:` and the live site into `demo:`. Leave `''` to show "link coming soon". Change `status` to `'Completed'` only when it really is.

**Internships:** replace `[Start date] - [End date]` with real dates. Add `points: ['...']` only with things you really did. Empty lists are hidden.

**Certificates (add / remove):**
1. Put the image (e.g. `infosys-dsa.jpg`) in `src/assets/certificates/`.
2. In `src/data/certificates.js`, set `image: 'infosys-dsa.jpg'` and `verifyUrl: 'https://...'`.
3. To add one, copy an existing `{ ... }` block and change the text and `id`. To remove one, delete its block.

---

## 3. Make the contact form really send messages

A website alone cannot send email, so the form currently **only validates** and clearly says nothing was sent. To connect it (free):

**Option A: Formspree (easiest)**
1. Sign up at https://formspree.io and create a form. Copy its URL, like `https://formspree.io/f/abcdwxyz`.
2. Open `src/components/Contact.jsx` and paste it into `const FORM_ENDPOINT = ''`.
3. Save. The form now sends real messages and shows success or error feedback.

**Option B: EmailJS**
1. Sign up at https://www.emailjs.com, create an email service and template.
2. Run `npm install @emailjs/browser`.
3. In `Contact.jsx`, replace the `fetch(...)` call in `handleSubmit` with:
```js
import emailjs from '@emailjs/browser'
// inside handleSubmit, instead of fetch:
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, { publicKey: 'YOUR_PUBLIC_KEY' })
```
and set `FORM_ENDPOINT` to any non-empty text (for example `'emailjs'`) so the code takes the sending path.

---

## 4. Upload to GitHub

1. Create a new empty repository on https://github.com (for example `portfolio`). Do not add a README there.
2. In the terminal, inside the `portfolio` folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

(`node_modules` and `dist` are already ignored by `.gitignore`.)

---

## 5. Deploy for free

### Option A: Vercel (simplest)
1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project**, pick your `portfolio` repository.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`). Click **Deploy**.
4. You get a live link like `https://portfolio-yourname.vercel.app`. Every `git push` updates it.

### Option B: GitHub Pages
The project is already configured (`base: './'` in `vite.config.js`), so no path changes are needed.

```bash
npm run deploy
```

This builds the site and publishes `dist/` to a branch named `gh-pages`. Then on GitHub:
**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `gh-pages` / `(root)` → Save.**
Your site appears at `https://YOUR-USERNAME.github.io/portfolio/` after a minute or two.

---

## 6. Placeholders still to replace

- [ ] Email, GitHub, LinkedIn (`src/data/profile.js`)
- [ ] Project GitHub / demo links (`src/data/projects.js`)
- [ ] Internship dates, and the third internship's duration (`src/data/experience.js`)
- [ ] Certificate images and verification links (`src/data/certificates.js`)
- [ ] School names and years for HSC and SSLC; confirm CGPA (`src/data/education.js`)
- [ ] Contact form endpoint (`src/components/Contact.jsx`)
- [ ] Page title and description (`index.html`) if you want to change them

## Project structure

```
portfolio/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx, App.jsx
    components/   Navbar, Hero, About, Skills, Projects, ProjectCard,
                  Experience, Timeline, Certificates, Education,
                  Contact, Footer, ThemeToggle, SectionHeading, Reveal
    data/         profile.js, skills.js, projects.js, experience.js,
                  certificates.js, education.js
    assets/       profile.jpg, certificates/
    styles/       main.css
```
