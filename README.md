# Nanxing Li — Academic Website

A responsive static academic website built with plain HTML, CSS, and JavaScript. It can be hosted directly on GitHub Pages without a build step.

## Preview locally

Option 1: open `index.html` directly in a browser.

Option 2 (recommended): from this folder, run:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update the content

- Edit page text directly in the five `.html` files.
- Search for `[PLACEHOLDER]` to find unfinished content.
- Add the profile and research images to `assets/img/` using the filenames referenced in the HTML.
- Add the full CV as `assets/files/Nanxing_Li_CV.pdf`.
- Replace `#` profile links in `contact.html` with real URLs.
- Adjust colors and spacing at the top of `assets/css/style.css`.

## Deploy with GitHub Pages

1. Create a GitHub repository (for example, `academic-website`).
2. Commit and push the complete contents of this folder to the repository's `main` branch.
3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main**, folder **/(root)**, then save.
6. GitHub will publish the site at the URL shown on that settings page.

For a personal root URL such as `username.github.io`, name the repository exactly `username.github.io`.
