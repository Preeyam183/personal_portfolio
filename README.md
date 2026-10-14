# Preeyam Shah — Underwater Portfolio

A responsive, original underwater portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and SVG illustrations.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. If that port is occupied, Next.js prints the available port.

## Verification and static export

```sh
npm run typecheck
npm run build
```

The production static site is generated in `out/`. It can be hosted by any static file server. Deployment is intentionally deferred.

## Editing

Update profile links, project descriptions, and experience entries in `lib/content.ts`. Page copy lives in `app/page.tsx`; colors, responsive layout, and animations in `app/globals.css`; original illustrations in `components/art.tsx`.

All links and main content work without JavaScript. Motion honors the system reduced-motion setting and can be paused using the navigation control. Offscreen ambient animations pause. No analytics, contact backend, or external runtime data requests are included.

When hosting later, set `NEXT_PUBLIC_SITE_URL` to the final origin before building so social-preview URLs resolve correctly. It defaults to localhost during development.

## Visual assets

The painted underwater setting is in `public/scenery/underwater-village.webp`; its generation prompt is documented alongside it. Actual project images and their source references are in `public/projects/`. The Premier League preview is illustrative because its public repository has no image assets.
