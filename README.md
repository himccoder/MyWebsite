# Himnish Chhabra — Portfolio v2.0

Personal portfolio, rebuilt from scratch. Dark "ego" aesthetic — near-black, electric cyan, jagged display type — with an interactive 3D tennis ball in the hero (drag to spin, click to smash).

## Tech Stack

- **Vite + React 19** — build tooling and UI
- **Tailwind CSS 4** — styling via theme tokens in `src/index.css`
- **three.js + react-three-fiber + drei** — 3D tennis ball scene (lazy-loaded)
- **Framer Motion** — scroll reveals, hero load animation, mobile menu
- **Web3Forms** — contact form backend (no server needed)

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

### Contact form

The form posts to [Web3Forms](https://web3forms.com). Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY` (free key from their site). In production, set the same env var in Vercel. Without a key the form degrades gracefully to a mailto hint.

## Structure

```
src/
├── data/content.js    # ALL site content (experience, projects, skills, ticker)
├── sections/          # Hero, Profile, Experience, Projects, Skills, Contact, Footer
├── components/        # Nav, Marquee, Cursor, GlitchText, SectionHeading, ProjectCard, Icons
├── three/             # BallScene + TennisBall (R3F, code-split)
├── assets/            # fonts (self-hosted), project images, PDFs
└── index.css          # Tailwind v4 theme tokens, font-faces, keyframes, utilities
```

To update site content, edit `src/data/content.js` — no component changes needed.

## Deploy

Static site — deploys to Vercel out of the box (framework preset: Vite). Remember to set `VITE_WEB3FORMS_KEY` in the project's environment variables.

## Author

**Himnish Chhabra** — [GitHub](https://github.com/himccoder) · [LinkedIn](https://www.linkedin.com/in/himnish-chhabra-3534a22b3/) · himnishchhabra@gmail.com
