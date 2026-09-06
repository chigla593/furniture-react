# Furniture — React version

A Vite + React furniture site, with routing and an image system driven by
a JSON manifest fetched at runtime.

## Run it

```bash
npm install
npm run dev
```

## How images work

Images are **not** imported into components with `import img from './x.png'`.
Instead:

- Actual image files live in `public/images/` and `public/icons/`
- `public/data/images.json` is a manifest that maps a semantic name (e.g.
  `"heroBackground"`) to a file path and alt text
- `src/hooks/useImageManifest.js` fetches that JSON file with the browser's
  `fetch()` API when the app loads
- `src/context/ImageManifestContext.jsx` wraps that hook in React Context so
  the fetch only happens **once**, and every component can read the result
  via `useImages()` instead of each doing its own fetch

**Why this instead of plain imports:** with `import`, an image is baked into
the JS bundle at build time — changing a photo means editing code and
rebuilding. With the fetch/manifest approach, swapping an image is just:
replace the file in `public/images/`, and if needed update the path in
`public/data/images.json`. No component code changes, no rebuild required
during development (Vite's dev server serves `public/` files directly).

**Trade-off worth knowing:** this adds a network request and a brief loading
state before images can render (every component using `useImages()` checks
`loading` and shows a small fallback message until the manifest arrives).
For a small site like this it's not noticeable, but it's not "free" compared
to imports — it's a deliberate choice, not strictly a performance upgrade.

### Files still missing
- `public/icons/free-delivery.svg` and `public/icons/support.svg` are
  placeholder icons I generated (simple line-art truck/headset) — swap them
  for real ones whenever you have them, same filenames.

## Routes

- `/` — home page (all sections)
- `/checkout` — placeholder, "Buy Now" leads here
- `/services`, `/doctors`, `/products`, `/gallery` — placeholder pages, one
  per nav link

## Project structure

```
public/
  data/images.json     → image manifest (fetched at runtime)
  images/               → actual photo files
  icons/                → actual icon files
src/
  components/           → Header, Hero, HeaderInfo, InspirationCollection,
                           BeautifyYourSpace, BrowseTheRange (carousel),
                           HowItWorks, JoinMailingList, Footer
  pages/                → Home, Checkout, PlaceholderPage
  hooks/useImageManifest.js
  context/ImageManifestContext.jsx
  styles/               → reset.css, style.css
```

## Build for production

```bash
npm run build
```
