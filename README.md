# Glacial Light

Official website for **Glacial Light**, Derek Corcoran's mythic folk-metal project.

Glacial Light combines folk metal with Celtic and Andean influences, with songs
shaped by migration, landscape, mythology, memory, and belonging between cultures.

## Website

The site includes:

- Homepage and project introduction
- Music and track information
- Runes of the Drift project pages
- Videos
- About
- Press
- Contact information

## Tech stack

The website is built with:

- Next.js
- React
- TypeScript
- Vite / vinext
- CSS
- Netlify for hosting and automatic deployment

The site is statically exported and does not require a database or server-side
application backend.

## Development

Requires Node.js 22.13 or newer.

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

## Deployment

The site is deployed automatically through Netlify from the `master` branch.

Netlify configuration is stored in `netlify.toml`.

Current build settings:

```text
Build command: npm run build
Publish directory: dist/client
Node version: 22
```

A push to `master` triggers a new Netlify deployment.

## Editing the site

Most website content is located under `app/`.

Common files:

| Content | File |
| --- | --- |
| Homepage | `app/page.tsx` |
| Music data and track information | `app/lib/content.ts` |
| Music page | `app/music/page.tsx` |
| Runes of the Drift | `app/runes-of-the-drift/page.tsx` |
| About | `app/about/page.tsx` |
| Press | `app/press/page.tsx` |
| Contact | `app/contact/page.tsx` |
| Navigation and footer | `app/components/SiteShell.tsx` |
| Styling | `app/globals.css` |
| Images | `public/images/` |

See [EDITING_GUIDE.md](EDITING_GUIDE.md) for more detailed instructions.

## Artist

**Derek Corcoran — Glacial Light**

Mythic folk metal shaped by migration, landscape, memory, mythology, and the
meeting of cultures.
