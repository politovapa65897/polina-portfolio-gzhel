# Polina Politova — Portfolio (Gzhel bookshelf)

A standalone static site built from an exported interactive canvas design: a navy "Gzhel bookshelf" with 8 books that open as full spreads, a pumpkin that shatters and carries the page down to the contact section, and an EN/RU language toggle.

**Live site:** https://politovapa65897.github.io/polina-portfolio-gzhel/

**Lighthouse (mobile, via PageSpeed Insights):** Performance 95 · Accessibility 96 · Best Practices 100 · SEO 100

## Structure

- `index.html` — page shell and markup
- `css/styles.css` — all styles (from the original design export, unchanged)
- `js/data.js` — content/translations (EN/RU) and pumpkin-shatter physics data
- `js/main.js` — app logic: book open/close, pumpkin shatter animation, language toggle, scroll reveal
- `assets/images/`, `assets/video/` — site media

## Run locally

```bash
python3 -m http.server 8098
```

Then open `http://localhost:8098/`.

Only external dependency: Google Fonts.
