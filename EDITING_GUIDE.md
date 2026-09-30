# Editing and publishing Glacial Light

This site is designed to be editable in GitHub's website and to deploy automatically on Netlify. You do not need to install anything for ordinary text, link or image changes.

## The simplest editing workflow

1. Create a private repository at [github.com/new](https://github.com/new).
2. Upload the contents of this folder to the repository.
3. In GitHub, open a file and select the pencil icon to edit it.
4. Select **Commit changes** when you are finished.
5. Netlify will rebuild the public site automatically after it is connected.

## Where to make common changes

| What you want to change | File |
| --- | --- |
| Homepage headline, introduction or featured sections | `app/page.tsx` |
| Track details, Runes chapters, links and video IDs | `app/lib/content.ts` |
| Music page wording | `app/music/page.tsx` |
| Runes project story | `app/runes-of-the-drift/page.tsx` |
| About page | `app/about/page.tsx` |
| Press feature and date | `app/press/page.tsx` |
| Contact page | `app/contact/page.tsx` |
| Navigation and footer | `app/components/SiteShell.tsx` |
| Colours, spacing and mobile image crops | `app/globals.css` |
| Photographs | `public/images/` |

For a photograph, the easiest approach is to upload a replacement with the same filename. This preserves the page layout and avoids editing code.

## Connect the site to Netlify

1. Sign in to [Netlify](https://app.netlify.com/) and choose **Add new site** → **Import an existing project**.
2. Choose GitHub and select the repository.
3. Netlify should read `netlify.toml` automatically. If it asks, use:
   - Build command: `npm run build`
   - Publish directory: `dist/client`
4. Select **Deploy**.

The first build can take a few minutes. Later GitHub commits will create new Netlify deployments automatically.

## Preview on your own computer (optional)

Install Node.js 22, then run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. Stop the preview with `Ctrl+C`.

## Content safeguards

- Keep private BandLab links, draft-file URLs, unfinished lyrics and confidential notes out of the site.
- Only describe unreleased work with wording cleared for public use.
- Do not add a release date, credit, quotation or performance unless it has been verified.
- Keep Bandcamp out of prominent calls to action until it contains public music.

## If you want a visual editor later

This version uses GitHub's built-in editor so it remains simple and portable. A form-based editor such as Decap CMS can be added later, but it needs an authentication setup for your domain.
