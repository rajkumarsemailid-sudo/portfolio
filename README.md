# Portfolio

Personal portfolio site — skills and demo videos of apps I've built.

Built with React + Vite + Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Editing content

All personal content (name, bio, skills, project descriptions, video IDs, links)
lives in one place: [`src/data/content.js`](src/data/content.js). Edit that file only —
no need to touch the components.

To add a demo video: upload it to YouTube (unlisted is fine — anyone with the
link, or the embedded link on this site, can view it), then copy the video ID
from the URL (`youtube.com/watch?v=VIDEO_ID`) into the matching project's
`videoId` field.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages automatically. Enable Pages once under
**Settings → Pages → Source: GitHub Actions** on the repo.
