# Zacc Drake Unlimited — Digital Headquarters

A responsive React website for ZDU's products, coaching, workshops, resources, and lead generation.

## Run locally

```bash
pnpm install
pnpm dev
```

Create a production build with `pnpm build`. The generated site is written to `dist/`.

## Update the site

The commonly edited content is centralized in `src/config/`:

- `brand.js` — brand name, colors, founder, tagline, and contact details
- `links.js` — social links, Calendly, scorecard, Stripe checkouts, and form endpoints
- `products.js` — offer names, prices, descriptions, images, and CTA labels
- `siteConfig.js` — navigation, SEO defaults, framework pillars, and audience content
- `testimonials.js` — testimonial content and placeholder status
- `faqs.js` — ebook, workbook, coaching, and general FAQs

Images live in `public/assets/`. Replace an image while keeping its filename to update it everywhere, or update its path in `products.js`.

## Connect sales and email collection

Open `src/config/links.js` and replace the empty strings for:

- `ebookCheckout` — the Stripe Payment Link for the ebook
- `workbookCheckout` — the Stripe Payment Link for the workbook
- `scorecardFormEndpoint` — your email platform's form/action endpoint
- `contactFormEndpoint` — your contact form service endpoint
- `workshopFormEndpoint` — your workshop inquiry form endpoint

Until an email endpoint is added, the scorecard form stores submissions locally in the visitor's browser and opens the live scorecard. Contact and workshop forms remain in clearly labeled preview mode until their endpoints are configured.

## Private media backoffice

Open `/backoffice` on the live site to reach the owner-only media workspace. It lets you:

- upload a replacement hero photo and adjust its scale, horizontal position, and vertical position;
- manage the homepage video cards, including YouTube/Vimeo links and internal resource links;
- add an optional hero-intro video URL;
- save settings, reset media, and export a JSON settings backup.

Before deploying, add `VITE_ZDU_BACKOFFICE_PASSWORD` to the Vercel project environment variables for Production, Preview, and Development. Do not commit the password to GitHub. The browser editor stores the current media settings in local storage so the owner can preview changes immediately in that browser; Pages CMS remains the production publishing path for blog/video posts and uploaded post media.

For site-wide, cross-device media publishing, the next infrastructure step is connecting this editor to authenticated server storage (Vercel Blob or an equivalent media service). The UI is already separated so that storage adapter can be added without redesigning the backoffice.

## Deployment note

This project uses clean browser routes such as `/ebook` and `/workbook`. Configure your hosting provider to rewrite unknown paths to `/index.html` so direct links and page refreshes work correctly.
