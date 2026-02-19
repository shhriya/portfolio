# Portfolio — Shriya K

A professional, data-driven portfolio and resume site for a Data & AI Engineer. Built with React and Vite, it showcases experience, projects, skills, education, certifications, and a printable two-page resume—all content sourced from JSON for easy updates.

---

## Live Demo

**[→ Live Demo](https://your-deployed-url.com)** *(Replace with your deployed link after publishing to Vercel, Netlify, GitHub Pages, etc.)*

---

## Project Description

This single-page portfolio provides:

- **Hero** — Name, role, tagline, profile photo, and CTAs (View projects, Download resume).
- **About** — Summary, key points, and current focus (data engineering, RAG, LLM evaluation).
- **Skills** — Primary and secondary technical skills in a clear card layout.
- **Projects** — Selected work with title, description, tech stack, and links (GitHub / live).
- **Experience** — Timeline of roles with company, period, location, and bullet points.
- **Education** — Degrees and institutions with details.
- **Certifications** — Professional certifications with issuer and focus.
- **Extracurriculars** — Leadership and activities.
- **Contact** — Email, LinkedIn, GitHub.
- **Resume** — Dedicated `/resume` route with a print-optimized, two-page layout (main resume + selected projects). “Download resume” opens the resume page; “Save as PDF / Print” uses the browser’s print dialog.

Content is fully driven by JSON files under `src/data/`, so you can update copy and structure without touching component code.

---

## Screenshots

| Section   | Description                    |
|----------|---------------------------------|
| **Hero** | Landing with profile and CTAs   |
| **Projects** | Project cards grid          |
| **Resume**   | Print-ready resume page     |

Add your own screenshots to the `screenshots/` folder, then reference them below (or use the table above as a guide).

<!-- Add your screenshot files to ./screenshots/ and uncomment the lines below -->
<!-- 
![Hero](./screenshots/hero.png)
![Projects](./screenshots/projects.png)
![Resume](./screenshots/resume.png)
-->

*Place `hero.png`, `projects.png`, and `resume.png` in the `screenshots/` folder, then uncomment the image lines above.*

---

## Tech Stack

| Category     | Technology |
|-------------|------------|
| **Framework** | React 19 |
| **Build**   | Vite 7 |
| **Routing** | React Router DOM |
| **Language** | JavaScript (JSX) |
| **Styling** | Vanilla CSS (modular: layout, components, sections, typography, resume) |
| **Data**    | JSON files (no backend; static content) |

---

## Architecture

### High-level

- **SPA** — Single-page app: one HTML entry, React mounts at root. The main portfolio is one long page with sections; `/resume` is a separate route.
- **Data-driven UI** — All visible content comes from JSON under `src/data/`. Components import these files and render; no content is hardcoded in JSX (except static labels like “Skills” where not in JSON).
- **Routing** — React Router: `/` → main portfolio, `/resume` → resume page (print-friendly, two-page layout).

### Directory structure

```
src/
├── main.jsx              # Entry: Router, routes (/ and /resume)
├── App.jsx                # Main layout: Navbar, sections, Footer
├── index.css              # Global styles and CSS variables
├── App.css                # App shell and main padding
├── components/            # Reusable UI
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── SectionTitle.jsx
│   ├── ProjectCard.jsx
│   ├── ExperienceItem.jsx
│   └── Footer.jsx
├── sections/              # Page sections (portfolio)
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Extracurricular.jsx
│   ├── Contact.jsx
│   └── profile.jpg
├── pages/
│   └── ResumePage.jsx     # /resume: resume built from JSON + print UI
├── data/                  # Content (no backend)
│   ├── profile.json
│   ├── about.json
│   ├── contact.json
│   ├── projects.json
│   ├── skills.json
│   ├── experience.json
│   ├── education.json
│   ├── certifications.json
│   └── activities.json
└── styles/
    ├── layout.css         # Grids, section scaffolding, cards layout
    ├── components.css     # Navbar, buttons, cards, footer
    ├── sections.css       # Hero, about, skills, timeline, contact
    ├── typography.css     # Section headers, titles
    └── resume.css         # Resume page + print styles
```

### Data flow

- **Portfolio:** Each section imports its JSON (e.g. `about.json`, `projects.json`) and maps over arrays/fields to render. Profile/hero and contact use `profile.json` and `contact.json`; navbar uses a fixed list of section ids for smooth scroll.
- **Resume:** `ResumePage` imports all relevant JSON files and composes one document: header (profile + contact), summary, experience, education, skills, certifications, activities, and projects (title + description on page 2). Print CSS forces “Selected Projects” onto the second page and hides the “Save as PDF / Print” button when printing.

### Key behaviors

- **Download resume:** Hero “Download resume” link opens `/resume` in a new tab. On the resume page, “Save as PDF / Print” triggers `window.print()` so the user can save as PDF.
- **Responsiveness:** Layout and typography are tuned for desktop and mobile; navbar collapses to a hamburger on small screens; resume is print-friendly with page breaks.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (or yarn/pnpm)

### Install and run

```bash
# Clone the repository (replace with your repo URL)
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use **http://localhost:5173/resume** for the resume page.

### Build for production

```bash
npm run build
npm run preview   # Optional: preview production build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages). Ensure the server serves `index.html` for `/resume` (SPA fallback) so client-side routing works.

---

## Updating content

Edit the JSON files in `src/data/`:

- **profile.json** — Name, role, tagline, CTAs, location, status, hero card pills.
- **about.json** — Section title, summary, bullet points, tech highlight.
- **contact.json** — Contact section title and list of links (email, LinkedIn, GitHub).
- **projects.json** — Project id, title, type, description, techStack, githubUrl, liveUrl.
- **skills.json** — `primary` and `secondary` arrays of skill strings.
- **experience.json** — Roles with company, period, location, bullets.
- **education.json** — Degrees, institution, period, details.
- **certifications.json** — Name, issuer, year, focus.
- **activities.json** — Extracurricular/leadership entries.

No code changes are required for content-only updates.

---

## License

Private / All rights reserved — update as needed for your use.
