# Nanxing Li — Academic Website

A concise, responsive one-page academic website for a planetary petrologist. It uses plain HTML, CSS, and JavaScript and can be hosted directly on GitHub Pages without a build step.

## Page structure

All primary content is in `index.html`: About, Research, Selected Publications, CV / Skills, and Contact. The former multi-page URLs are retained as small redirects so existing links do not break.

## Preview locally

Open `index.html` directly, or run a local server from this folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Replace content and assets

- **Profile photo:** add `assets/img/profile.jpg`.
- **Planetary hero:** replace `assets/img/planet-background.jpg` with a wide image using the same filename, or update the URL in `assets/css/style.css`. Add an appropriate image credit in `index.html` when using third-party mission imagery.
- **CV:** add `assets/files/Nanxing_Li_CV.pdf`.
- **Publication links:** search `index.html` for `[PLACEHOLDER]` and replace `href="#"` with DOI or publisher links.
- **Academic profiles:** Google Scholar and ResearchGate are already linked. Replace the ORCID and LinkedIn placeholders.
- **Education and manuscript status:** search the site for bracketed text and replace it with confirmed details.

## GitHub Pages

The live site is deployed from the `main` branch at:

`https://nanxingli.github.io/nanxing-li-academic-website/`

Pushing a new commit to `main` will trigger an automatic Pages rebuild.
