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

The production static site is generated in `out/`. It can be hosted by any static file server. GitHub Pages deploys this export automatically when changes are pushed to `main`.

## Editing

Update profile links, project descriptions, and experience entries in `lib/content.ts`. Page copy lives in `app/page.tsx`; colors, responsive layout, and animations in `app/globals.css`; original illustrations in `components/art.tsx`.

All links and main content work without JavaScript. Motion honors the system reduced-motion setting and can be paused using the navigation control. Offscreen ambient animations pause. No analytics, contact backend, or external runtime data requests are included.

When hosting later, set `NEXT_PUBLIC_SITE_URL` to the final origin before building so social-preview URLs resolve correctly. It defaults to localhost during development.

## Visual assets

The painted underwater setting is in `public/scenery/underwater-village.webp`; its generation prompt is documented alongside it. Actual project images and their source references are in `public/projects/`. The Premier League preview is illustrative because its public repository has no image assets.

The continuous water environment and dated experience timeline are styled in `app/immersive.css`. Experience dates and optional project GitHub links live in `lib/content.ts`. Ambient motion can be paused and respects system reduced motion.

The hero surface uses a lightweight canvas to refract the painted water texture at approximately 30 fps. It freezes for paused/reduced motion and stops drawing after the surface scrolls offscreen. The headshot remains the original JPEG with a separate transparent frame overlay. Official company/certification assets are documented in `public/logos/SOURCES.md`.

Navigation appears as a fixed bar after scrolling through the hero. The experience timeline uses a small scroll-following anchor, hidden when motion is paused or reduced. The RAISE-26 card now displays the complete original winner poster.

The timeline's weathered anchor sways from its eye while a dark linked chain tracks scroll progress. Nearby experience cards dip slightly as it passes; paused/reduced motion disables the sway and card tug. Legacy hero fish, extra flower overlays, faint bubble trio, and the old light overlay have been removed.

The contact section and footer use normal flow to avoid a blank final scroll area. The centered contact invitation includes a direct email link that opens the visitor’s email app.

Timeline connections use dark metal links and a bolted mounting ring. Navigation displays the full name. CVM4X and RAISE-26 share a corner trophy badge. The contact headline uses outlined yellow lettering for contrast over the water artwork.

## GitHub Pages

Live site: https://preeyam183.github.io/personal_portfolio/

The workflow in `.github/workflows/pages.yml` builds and deploys `main` using GitHub Actions. In repository Settings → Pages, the source is GitHub Actions.

To reproduce the hosted build locally:

```sh
NEXT_PUBLIC_BASE_PATH=/personal_portfolio NEXT_PUBLIC_SITE_URL=https://preeyam183.github.io npm run build
```

The base path is compiled into scripts, images, social previews, and exported CSS. Normal `npm run dev` continues to serve at `/`.

## Skills and milestones

Edit the `skills` and `metrics` arrays in `lib/content.ts`. The compact skill grid wraps as entries are added; its twelve entries are core software engineering skills selected from the provided résumé. Technology logos and attribution are in `public/skills/`. Metrics show competition wins, projects built, SpongeBob episodes watched, and internships; plus suffixes are preserved during the count-up. The metrics sit immediately below About and count up once when visible. The floating skills section sits between Projects and Experience. Both respect the motion control and reduced-motion preferences.

## Experience details

Algoverse and NeuralSeek display brief topic buttons that open native dialogs with résumé-based bullet points and technologies. AWS and Rutgers AI Club remain simple entries. Edit `experience` in `lib/content.ts`; add `{ label, href }` objects to an entry’s `details.links` for verified public resources. Algoverse includes the user-provided NeurIPS 2026 workshop venue; its paper link is pending. Dialogs support Escape, backdrop dismissal, focus restoration, and reduced motion.

## Project dialogs

Click any project picture (including the Premier League illustration) to open its details. Edit descriptions, highlights, technology lists, and local galleries in `lib/project-details.ts`; project titles and external links stay in `lib/content.ts`. The shared dialog shell in `components/detail-dialog.tsx` handles focus, Escape, backdrop dismissal, and background scroll locking for both projects and experience. Its close control stays visible during long galleries. The Premier League visual is explicitly labeled as an illustration because no actual screenshot was available.
