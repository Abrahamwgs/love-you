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

createStars();
createFireflies();

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
