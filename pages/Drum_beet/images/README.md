# drum_beet

A minimal browser-based beat toy that plays a synthesized kick drum and pulses a visual core in sync with the tempo.

## Features

- One-click `Play` / `Pause`
- Adjustable tempo from `40` to `200` BPM
- Real-time BPM changes while playing
- Visual pulse animation synchronized to each beat
- No build tools or dependencies required

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Web Audio API (`AudioContext`, oscillator + gain envelope)

## Getting Started

1. Clone this repository.
2. Open `index.html` in a modern browser.
3. Click **Play** to start the beat.

Because this project uses the Web Audio API, audio starts only after a user gesture (button click), which is expected browser behavior.

## Controls

- **Play / Pause button**: starts or stops the beat loop
- **BPM slider**: changes tempo instantly

## Notes

- Best experienced on desktop Chrome, Edge, or Firefox.
- If sound is not heard, check browser tab audio permissions and output device.


Authored bY SQUIDLY1408 / Lucas Newman