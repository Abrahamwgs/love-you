const ROSE_PALETTES = [
  { base: "#6b1530", mid: "#a82545", tip: "#e890a8", shadow: "rgba(60,10,30,0.35)", glow: "rgba(180,50,80,0.22)" },
  { base: "#7a2045", mid: "#c43d6e", tip: "#f5a8c0", shadow: "rgba(70,10,35,0.35)", glow: "rgba(200,60,100,0.2)" },
  { base: "#9e5060", mid: "#d4889a", tip: "#fde8ee", shadow: "rgba(80,40,50,0.3)", glow: "rgba(220,140,160,0.18)" },
  { base: "#5c1025", mid: "#912040", tip: "#d47088", shadow: "rgba(50,5,20,0.4)", glow: "rgba(160,40,70,0.25)" },
  { base: "#8b4060", mid: "#c06080", tip: "#f0c0d0", shadow: "rgba(70,30,45,0.3)", glow: "rgba(200,80,120,0.2)" },
];

const ROSE_LAYOUT = [
  { left: 2, bottom: 3, scale: 0.42, stem: 34, rot: -14, z: 1, bloom: 0.9, leaves: 3 },
  { left: 7, bottom: 2, scale: 0.5, stem: 40, rot: 8, z: 2, bloom: 1.0, leaves: 4 },
  { left: 13, bottom: 4, scale: 0.58, stem: 46, rot: -6, z: 3, bloom: 1.05, leaves: 4 },
  { left: 19, bottom: 2, scale: 0.65, stem: 50, rot: 12, z: 4, bloom: 1.1, leaves: 4 },
  { left: 26, bottom: 3, scale: 0.72, stem: 54, rot: -10, z: 5, bloom: 1.15, leaves: 5 },
  { left: 33, bottom: 2, scale: 0.8, stem: 58, rot: 6, z: 6, bloom: 1.2, leaves: 5 },
  { left: 40, bottom: 4, scale: 0.88, stem: 62, rot: -4, z: 7, bloom: 1.25, leaves: 5 },
  { left: 47, bottom: 2, scale: 0.95, stem: 66, rot: 10, z: 8, bloom: 1.3, leaves: 6 },
  { left: 54, bottom: 3, scale: 1, stem: 68, rot: -8, z: 9, bloom: 1.35, leaves: 6 },
  { left: 61, bottom: 2, scale: 0.92, stem: 64, rot: 5, z: 8, bloom: 1.3, leaves: 6 },
  { left: 68, bottom: 4, scale: 0.84, stem: 58, rot: -12, z: 7, bloom: 1.25, leaves: 5 },
  { left: 75, bottom: 2, scale: 0.76, stem: 52, rot: 9, z: 6, bloom: 1.2, leaves: 5 },
  { left: 81, bottom: 3, scale: 0.68, stem: 48, rot: -7, z: 5, bloom: 1.15, leaves: 4 },
  { left: 87, bottom: 2, scale: 0.6, stem: 44, rot: 11, z: 4, bloom: 1.1, leaves: 4 },
  { left: 93, bottom: 4, scale: 0.52, stem: 38, rot: -9, z: 3, bloom: 1.05, leaves: 4 },
  { left: 98, bottom: 2, scale: 0.45, stem: 34, rot: 6, z: 2, bloom: 1.0, leaves: 3 },
  { left: 16, bottom: 6, scale: 0.48, stem: 36, rot: 15, z: 2, bloom: 1.4, leaves: 3 },
  { left: 36, bottom: 7, scale: 0.52, stem: 38, rot: -18, z: 3, bloom: 1.5, leaves: 3 },
  { left: 58, bottom: 6, scale: 0.5, stem: 36, rot: 14, z: 2, bloom: 1.45, leaves: 3 },
  { left: 78, bottom: 7, scale: 0.46, stem: 34, rot: -16, z: 2, bloom: 1.4, leaves: 3 },
  { left: 4, bottom: 8, scale: 0.4, stem: 30, rot: 10, z: 1, bloom: 1.6, leaves: 3 },
  { left: 90, bottom: 8, scale: 0.4, stem: 30, rot: -11, z: 1, bloom: 1.55, leaves: 3 },
];

function roseMarkup(leafCount) {
  const leaves = Array.from(
    { length: leafCount },
    (_, i) => `<div class="flower__line__leaf flower__line__leaf--${i + 1}"></div>`
  ).join("");

  return `
    <div class="flower__leafs">
      <div class="flower__leaf flower__leaf--back flower__leaf--b1"></div>
      <div class="flower__leaf flower__leaf--back flower__leaf--b2"></div>
      <div class="flower__leaf flower__leaf--back flower__leaf--b3"></div>
      <div class="flower__leaf flower__leaf--back flower__leaf--b4"></div>
      <div class="flower__leaf flower__leaf--mid flower__leaf--m1"></div>
      <div class="flower__leaf flower__leaf--mid flower__leaf--m2"></div>
      <div class="flower__leaf flower__leaf--mid flower__leaf--m3"></div>
      <div class="flower__leaf flower__leaf--mid flower__leaf--m4"></div>
      <div class="flower__leaf flower__leaf--1"></div>
      <div class="flower__leaf flower__leaf--2"></div>
      <div class="flower__leaf flower__leaf--3"></div>
      <div class="flower__leaf flower__leaf--4"></div>
      <div class="flower__rose-bud">
        <div class="flower__leaf flower__leaf--bud flower__leaf--u1"></div>
        <div class="flower__leaf flower__leaf--bud flower__leaf--u2"></div>
        <div class="flower__leaf flower__leaf--bud flower__leaf--u3"></div>
        <div class="flower__leaf flower__leaf--bud flower__leaf--u4"></div>
      </div>
    </div>
    <div class="flower__line">${leaves}</div>
  `;
}

function createRoses() {
  const garden = document.getElementById("rose-garden");
  if (!garden) return;

  const anchor = garden.firstElementChild;

  ROSE_LAYOUT.forEach((rose, index) => {
    const palette = ROSE_PALETTES[index % ROSE_PALETTES.length];
    const el = document.createElement("div");
    el.className = "rose";
    el.style.cssText = `
      left: ${rose.left}%;
      bottom: ${rose.bottom}vmin;
      z-index: ${rose.z};
      --petal-base: ${palette.base};
      --petal-mid: ${palette.mid};
      --petal-tip: ${palette.tip};
      --petal-shadow: ${palette.shadow};
      --petal-glow: ${palette.glow};
      --stem-h: ${rose.stem}vmin;
      --stem-delay: ${0.2 + index * 0.05}s;
      --bloom-delay: ${rose.bloom}s;
      --rotate: ${rose.rot}deg;
      --scale: ${rose.scale};
      --sway: ${3.5 + (index % 5) * 0.4}s;
      --sway-delay: ${index * 0.15}s;
    `;
    el.innerHTML = `<div class="rose__body">${roseMarkup(rose.leaves)}</div>`;
    garden.insertBefore(el, anchor);
  });
}

function createStars() {
  const container = document.getElementById("stars");
  if (!container) return;

  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2 + 0.5;
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 55}%;
      width: ${size}px;
      height: ${size}px;
      --opacity: ${Math.random() * 0.5 + 0.3};
      --duration: ${Math.random() * 3 + 2}s;
      --delay: ${Math.random() * 4}s;
    `;
    container.appendChild(star);
  }
}

function createFireflies() {
  const container = document.getElementById("fireflies");
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const fly = document.createElement("div");
    fly.className = "firefly";
    fly.style.cssText = `
      left: ${Math.random() * 90 + 5}%;
      top: ${Math.random() * 60 + 20}%;
      --dx: ${(Math.random() - 0.5) * 20}vmin;
      --dy: ${(Math.random() - 0.5) * 15}vmin;
      --duration: ${Math.random() * 6 + 6}s;
      --delay: ${Math.random() * 8}s;
    `;
    container.appendChild(fly);
  }
}

createRoses();
createStars();
createFireflies();

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
