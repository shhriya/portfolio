# Portfolio — Shriya K

A professional, data-driven portfolio and resume site for a Data & AI Engineer. Built with React and Vite, it showcases experience, projects, skills, education, certifications, and a printable two-page resume—all content sourced from JSON for easy updates.

---

## Live Demo

**[→ Live Demo](https://portfolio-9eyyn7nda-shhriyas-projects.vercel.app/)**

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
- **Resume** — Dedicated `/resume` route with a print-optimized, two-page layout (main resume + projects). “Download resume” opens the resume page; “Save as PDF / Print” uses the browser’s print dialog.

Content is fully driven by JSON files under `src/data/`, so you can update copy and structure without touching component code.

---

## Screenshots

<img width="919" height="434" alt="image" src="https://github.com/user-attachments/assets/e70bf339-e8a7-431b-aa9d-c0866006d9de" />

<img width="924" height="434" alt="image" src="https://github.com/user-attachments/assets/08a28eca-c6f8-4f14-a186-f76418e76ad6" />

<img width="913" height="433" alt="image" src="https://github.com/user-attachments/assets/d67712da-bd7f-4dde-9c5b-ab1676f75ca3" />

<img width="929" height="437" alt="image" src="https://github.com/user-attachments/assets/61a84d9e-2e01-4e83-b1c3-376513e2b4ec" />

<img width="929" height="430" alt="image" src="https://github.com/user-attachments/assets/30bf735f-c78a-4cc2-a23a-83a76fde8700" />

<img width="916" height="405" alt="image" src="https://github.com/user-attachments/assets/db672ffc-7cff-4444-a75d-8d19d17641d5" />

<img width="922" height="407" alt="image" src="https://github.com/user-attachments/assets/2ddca468-2f8c-48cb-8306-e320792b8978" />

<img width="912" height="410" alt="image" src="https://github.com/user-attachments/assets/c8adfc6a-cdc8-48e0-b37a-21a439d5035e" />

<img width="914" height="419" alt="image" src="https://github.com/user-attachments/assets/6022012b-cd47-45b2-b0d1-497dcff57fd7" />


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
git clone https://github.com/shhriya/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use **http://localhost:5173/resume** for the resume page.


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
