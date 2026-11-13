<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/images/logo-dark.png">
    <img src="./assets/images/logo.png" alt="markx UoN" width="460">
  </picture>
</p>

# markx UoN

A grade and GPA planner for University of Newcastle students. Enter the assessments from your Course Outline and the marks you've got back, and markx shows what you need on the rest to get a P, C, D or HD. It also tracks your GPA on UoN's 7-point scale.

> **Disclaimer:** markx is an independent, student-built project. It is not affiliated with, endorsed by, sponsored by or connected to the University of Newcastle, Australia. "University of Newcastle" and "UoN" are used only to describe who this tool is for, and no university logos are used. Results are estimates, not official grades. Your official results are the ones on myHub.

## Features

**My courses**
- One tab per course, with unit value (10, 20 or 40 units).
- Marks entered as a score and what it's out of (e.g. `17 / 20`). Leave the score blank for anything not marked yet.
- Minimum marks (hurdles): every "what you need" figure also clears them, and you're warned if a marked item missed one.
- Pick a goal grade. Each grade tile shows the average you'd need on everything that's left.
- A summary of marks locked in, your average so far, what's still to come and the best you can finish on.

**My GPA**
- Current GPA from finished courses, plus past results you add from myHub.
- Projected GPA if you hit your goals, and the range from just passing to acing everything this term.
- A target planner: "What do I need this term to reach a 6.0?"
- Your grade mix across all units.

**Everything else**
- A how-it-works section and a FAQ.
- Back up as a downloadable file or copy-paste text, then load it on another device.
- Can be added to a phone's home screen, and prints cleanly.

## UoN rules it uses

| Grade | Mark | GPA points |
|---|---|---|
| HD High Distinction | 85–100 | 7 |
| D Distinction | 75–84 | 6 |
| C Credit | 65–74 | 5 |
| P Pass | 50–64 | 4 |
| FF Fail | below 50 | 0 |

GPA is weighted by unit value and shown to one decimal place. Ungraded passes (UP) don't count. These figures are based on publicly available UoN information. If UoN changes them, update `SCALE` and `PTS` near the top of the script in [index.html](index.html).

## Privacy

Everything stays in your browser's local storage. There are no accounts, cookies, analytics or third-party requests, and the fonts are self-hosted. Read the full [privacy policy](privacy.html) and [terms and conditions](terms.html).

## Files

```
index.html                 the app: markup, styles and script
privacy.html               privacy policy
terms.html                 terms and conditions
manifest.webmanifest       home-screen install details
assets/fonts/              Fira Sans and Fira Sans Condensed (SIL Open Font License, see OFL.txt)
assets/images/logo.png     markx UoN logo (logo-dark.png for dark backgrounds)
assets/images/favicon.svg  favicon (also favicon.ico and icon-32/180/192/512.png)
```

## Running it

Open `index.html` in a browser, or serve the repository root and visit `/UoN/`:

```sh
python -m http.server
# then open http://localhost:8000/UoN/
```

Once GitHub Pages is on, it's at `https://squidly1408.github.io/MarkX/UoN/`. See the [main README](../README.md#putting-it-online) for hosting steps.
