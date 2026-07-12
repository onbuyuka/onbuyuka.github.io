# onbuyuka.github.io

My personal website — [onbuyuka.github.io](https://onbuyuka.github.io/).

A small single-page site: a short intro, the tools I use, and a selection of side
projects, with links to source and live demos.

## Tech

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS** (via CDN)
- Deployed to **GitHub Pages**

## Develop

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Deploy

```bash
npm run deploy     # builds and publishes dist/ to the gh-pages branch
```

The GitHub Pages source must be set to the `gh-pages` branch.

## Structure

```
index.html            # Vite entry (Tailwind config + fonts)
index.tsx             # React bootstrap
App.tsx               # page composition
types.ts              # shared types
components/           # Nav, Hero, About, Projects, ProjectCard, Contact, Icons
data/projects.ts      # the featured projects list
public/               # résumé PDF, avatar/favicon, .nojekyll
```

To feature a new project, add an entry to [`data/projects.ts`](data/projects.ts).
