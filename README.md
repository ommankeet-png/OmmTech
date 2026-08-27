# Omm Tech Properties — React + Vite

## Setup
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/

## Stack
- React 18 + Vite
- react-router-dom (client-side routing: /, /properties, /about, /contact)
- Tailwind CSS (brand tokens in tailwind.config.js: navy / gold / cream / ink)
- Fonts loaded via Google Fonts in index.html: Bodoni Moda (display), Manrope (body), IBM Plex Mono (data/labels)

## Notes
- "Extocy 30" wasn't a font I could locate/license, so Bodoni Moda is used as a stand-in
  for headings. To swap in the real brand font: add an @font-face block (or Google Fonts
  link) and update `fontFamily.display` in tailwind.config.js.
- Property data is static placeholder content in src/data/properties.js — swap for an
  API call (e.g. axios via a shared api.js, matching your other projects) when the
  backend is ready.
- Contact form (src/pages/Contact.jsx) currently logs to console on submit —
  handleSubmit is the spot to POST to your Express API.
