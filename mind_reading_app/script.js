const symbols = ["🔮", "⭐", "🌟", "🔥", "🪐", "🎩", "💫", "👁️", "🔔", "🧠"];
const magicSymbol = symbols[Math.floor(Math.random() * symbols.length)];

function generateGrid() {
  const grid = document.getElementById("number-grid");
  for (let i = 0; i < 100; i++) {
    let symbol = (i % 9 === 0) ? magicSymbol : symbols[Math.floor(Math.random() * symbols.length)];
    const div = document.createElement("div");
    div.textContent = `${i} : ${symbol}`;
    grid.appendChild(div);
  }
}

function revealSymbol() {
  const reveal = document.getElementById("reveal");
  reveal.classList.remove("hidden");
  setTimeout(() => {
    reveal.classList.add("show");
    document.getElementById("magic-symbol").textContent = magicSymbol;
  }, 1000); // suspense delay
}

window.onload = generateGrid;
