# Sixth Lens company website

An immersive, SEO-first landing page for Sixth Lens Technology in Doha, Qatar. Built with Next.js, React Three Fiber and a progressively enhanced WebGL lens scene.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run build
```

The production build is exported to `out/` as static files.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site whenever `main` is pushed. In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the source.

The build automatically adds the repository name as the Next.js base path for project sites. User or organization sites ending in `.github.io` remain at the root.

## Before launch

- Replace `https://sixthlens.qa` and `hello@sixthlens.qa` in `src/config/site.ts` if the final domain or mailbox differs.
- Set `NEXT_PUBLIC_SITE_URL` in other deployment environments so canonical, sitemap and social URLs match the live domain.
- Add confirmed LinkedIn and other social links when those profiles are ready.
- Review all service wording against the final commercial offer before publishing.

## Architecture

- `src/app`: route, metadata, sitemap, robots and web manifest
- `src/components/layout`: reusable navigation and footer
- `src/components/three`: isolated WebGL experience
- `src/components/ui`: reusable interaction primitives
- `src/config`: company and deployment configuration
- `src/data`: page content kept separate from presentation
- `public/images`: optimized project-owned imagery
