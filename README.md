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

## Production deployment

The production site is hosted at `https://sixthlense.com` using a private S3 origin and CloudFront.

```bash
npm run deploy:aws
```

This command builds the static export, uploads immutable assets with long-lived caching, uploads HTML and SEO files with revalidation, then clears the CloudFront cache.

AWS resources:

- S3 bucket: `sixthlense-com-494934332052`
- CloudFront distribution: `EAXGJOPZ85I2R`
- ACM certificate region: `us-east-1`
- Primary AWS region: `us-west-2`
- DNS: Hostinger, pointing the root ALIAS and `www` CNAME to CloudFront

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
