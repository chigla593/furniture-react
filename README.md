# Furniture — React version

A Vite + React port of the full Furniture site, built from:
- `index.html`
- `assets/css/style.css`
- `assets/css/reset.css`
- `Images/` and `assets/Icons/`

## ⚠️ One manual step: add your images

GitHub blocks automated bulk access to folder listings, so I could see every
filename referenced in your HTML/CSS but couldn't download the actual image
files. Copy them from your repo into these two folders:

**`src/assets/images/`** (from the repo's `Images/` folder):
- `Herosecimage.svg`
- `inspration-collection-img1.png`
- `inspration-collection-img2.png`
- `inspration-collection-img3.png`
- `Beautify-Your-Space-img.png`
- `green-half-circle.png`
- `DIning-img.png`
- `Living-img.png`
- `Bedroom-img.png`
- `Purchase-Securely-img.png`
- `Ships-From-Warehouse-img.png`
- `Style-Your-Room-img.png`
- `Instagram-Shop-1.png`
- `Instagram-Shop-2.png`
- `Instagram-Shop-3.png`
- `Instagram-Shop-4.png`

**`src/assets/icons/`** (from the repo's `assets/Icons/` folder):
- `Free-delivery.svg`
- `Support.svg`
- `authenticity.svg`

Every filename is imported directly in the matching component, so as long as
the names match exactly (including capitalization — e.g. `DIning-img.png`),
everything will just work.

## Project structure

```
src/
  components/
    Header.jsx               → top nav bar
    Hero.jsx                 → "Discover Our New Collection" hero card
    HeaderInfo.jsx            → Free Delivery / Support / Authentic strip
    InspirationCollection.jsx
    BeautifyYourSpace.jsx
    BrowseTheRange.jsx        → Dining / Living / Bedroom cards
    HowItWorks.jsx
    JoinMailingList.jsx       → email signup form (controlled input + submit handler)
    Footer.jsx
  assets/
    images/                  → put Images/ contents here (see above)
    icons/                   → put assets/Icons/ contents here (see above)
  styles/
    reset.css                → unchanged from the original
    style.css                → original style.css, flattened from nested
                                (SCSS-style) selectors into plain, valid CSS.
                                Same visual result, just parseable by a browser.
  App.jsx                    → assembles header, all main sections, and the footer
  main.jsx                   → app entry point, imports the CSS
```

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Notes on the conversion

- `style.css` used nested selectors (SCSS syntax) that aren't valid in a
  browser-loaded `.css` file — flattened into standard selectors, same look.
- Every list of repeated markup (nav links, guarantee icons, Dining/Living/
  Bedroom cards, How-It-Works steps, Instagram images) is now driven by a
  small array at the top of its component, so adding/removing an item is a
  one-line change instead of copy-pasting JSX.
- The mailing list form is now a real controlled React form: typing updates
  state, and submitting calls a `handleSubmit` function (currently just logs
  to the console and shows a thank-you message — wire it up to your email
  provider's API when you're ready).
- Layout and styling are otherwise a straight structural port — not a redesign.
