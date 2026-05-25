# Roses Under the Moonlight

A romantic, scrollable web page featuring an animated rose garden at night and a personal love note below. Built with pure HTML, CSS, and JavaScript — no frameworks or build step required.

## Preview

Open `index.html` in your browser to see:

1. **Top** — A moonlit garden where 22 CSS roses bloom under the stars
2. **Bottom** — A heartfelt message that fades in as you scroll down

## Features

- **Animated rose garden** — 22 roses generated with JavaScript, each with layered petals, stems, thorns, and gentle swaying motion
- **Night sky atmosphere** — Glowing moon, twinkling stars, fireflies, and aurora-style gradients
- **Realistic rose design** — Multiple petal layers (outer, mid, inner, and bud), natural green stems, and five rose color palettes (crimson, pink, blush, and more)
- **Scrollable layout** — Full-screen garden on top; love letter at the bottom
- **Romantic message** — Customizable title, poem, and sign-off with elegant typography ([Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond))
- **Responsive** — Scales gracefully on tablets and phones
- **Zero dependencies** — Static files only; Google Fonts loaded from CDN

## Getting Started

### Option 1: Open directly

Double-click `index.html` or open it in any modern browser.

### Option 2: Local server

```bash
cd love
python3 -m http.server 8765
```

Then visit [http://localhost:8765](http://localhost:8765).

## Project Structure

```
love/
├── index.html   # Page structure, garden scenery, and message
├── style.css    # All visuals, animations, and responsive styles
├── main.js      # Rose generation, stars, fireflies, bloom trigger
└── README.md
```

## Customization

### Change the love message

Edit the text inside the `<section class="message">` block in `index.html`:

```html
<p class="message__title">To My Beautiful Girl</p>
<p class="message__subtitle">these roses are for you</p>
<p class="message__body">
  Your words here...
</p>
<p class="message__sign">I love you ♥</p>
```

### Add or remove roses

In `main.js`, edit the `ROSE_LAYOUT` array. Each entry controls:

| Property | Description |
|----------|-------------|
| `left`   | Horizontal position (%) |
| `bottom` | Distance from ground (vmin) |
| `scale`  | Rose size |
| `stem`   | Stem height (vmin) |
| `rot`    | Rotation angle (degrees) |
| `z`      | Layer depth |
| `bloom`  | Animation delay (seconds) |
| `leaves` | Number of stem leaves (3–6) |

### Change rose colors

Edit `ROSE_PALETTES` in `main.js`. Each palette has `base`, `mid`, `tip`, `shadow`, and `glow` values used for petals and lighting.

## How It Works

1. On load, the body has a `not-loaded` class that pauses CSS animations
2. After 1 second, JavaScript removes `not-loaded` and the roses begin blooming
3. `createRoses()` builds 22 rose elements and inserts them into `#rose-garden`
4. `createStars()` and `createFireflies()` populate the night sky
5. Scroll down past the garden to read the message section

## Tech Stack

- HTML5
- CSS3 (keyframes, custom properties, `vmin` units, gradients, transforms)
- Vanilla JavaScript (DOM generation, no libraries)

## Inspiration

The original blossoming flower animation concept is inspired by the CSS night garden demos popularized by tutorials such as [Coding Stella's flower animation](https://codingstella.com/how-to-create-blossoming-flower-animation-using-html-css-and-js/). This project extends that idea into a full rose garden with a scrollable romantic letter.

## License

Free to use, modify, and share. If you send it to someone special, make it yours.
