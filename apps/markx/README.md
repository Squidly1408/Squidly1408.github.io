<p align="center">
  <img src="./images/banner.png" alt="markx" width="600">
</p>

# markx

A small grade planner for university units. Enter your assessments, their weights and the marks you've got back so far, and markx works out where you stand and what you still need on the remaining pieces to hit your target grade (Pass, Credit, Distinction, High Distinction).

- Marks are entered as a score and what it's out of (e.g. `17 / 20`). Leave the score blank for anything not marked yet.
- Hurdles are supported: the minimum mark needed on a single piece to pass the unit, whatever your total.
- Track several units at once with tabs.
- Weights that don't add up to 100 are scaled to a 100-point course.

## UoN version

<a href="UoN/README.md"><img src="UoN/assets/images/logo.png" alt="markx UoN" width="260"></a>

[`UoN/`](UoN/) is a version built for University of Newcastle students. **[Read the UoN README →](UoN/README.md)**

- UoN grade bands (HD 85+, D 75+, C 65+, P 50+, FF) and wording from Course Outlines ("minimum mark" for hurdles).
- A **My GPA** view on UoN's 7-point scale, weighted by unit value: current GPA, projected GPA from your goals, the best and worst case this term, past results, and a "what do I need for a 6.0?" planner.
- Backups as a downloadable file or copy-paste text, a FAQ, and a print-friendly layout.

markx is an independent project. It is not affiliated with, endorsed by or connected to the University of Newcastle, Australia.

## Running it

Static files only, with no build step or dependencies. Open `index.html` (or `UoN/index.html`) in a browser, or serve the folder with anything, for example:

```sh
npx serve .
# or
python -m http.server
```

## Putting it online

Every path is relative, so the folder can be hosted as-is on any static host.

- **GitHub Pages:** in the repo, go to *Settings → Pages*, set *Source* to *Deploy from a branch*, pick `main` and `/ (root)`, and save. The site goes up at `https://squidly1408.github.io/MarkX/`, with the UoN version at `/MarkX/UoN/`. The `.nojekyll` file stops Pages from running Jekyll over it.
- **Netlify, Cloudflare Pages, Vercel and similar:** point them at the repo with no build command and the repo root as the publish directory.

## Your data

Everything is stored in your browser's `localStorage`; nothing is sent anywhere. Use **Back up or move your data** at the bottom of the page to copy a backup and paste it into another browser or device.

Each version has its own privacy policy and terms: [general privacy](privacy.html) · [general terms](terms.html) · [UoN privacy](UoN/privacy.html) · [UoN terms](UoN/terms.html).

## Project layout

```
index.html                 general version: markup, styles and script in one file
privacy.html, terms.html   general version's privacy policy and terms
images/logo.svg            general favicon and app icon
images/banner.png          README banner and link-preview image
UoN/                       University of Newcastle version (see UoN/README.md)
.nojekyll                  serve files as-is on GitHub Pages
```
