// Canvas Background Animation
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Food icons (you can replace these with actual images)
const foodIcons = ["🍎", "🍕", "🥑", "🍝", "🍩", "🍓", "🥕", "🍗"];

// Array to store floating icons
let icons = [];

canvas.style.opacity = 0.4;
// Create Icon class
class Icon {
  constructor(x, y, text, speed) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.speed = speed;
  }

  // Draw icon on canvas
  draw() {
    ctx.font = "40px Arial";
    ctx.fillText(this.text, this.x, this.y);
  }

  // Update icon position
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -50; // Reset to top
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

// Initialize icons
function init() {
  icons = [];
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const text = foodIcons[Math.floor(Math.random() * foodIcons.length)];
    const speed = Math.random() * 1 + 0.1; // Random speed
    icons.push(new Icon(x, y, text, speed));
  }
}

// Animate icons
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  icons.forEach((icon) => icon.update()); // Update and draw icons
  requestAnimationFrame(animate); // Loop animation
}

// Handle window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Start animation
init();
animate();

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

const modal1 = document.getElementById("myModal1");
const openBtn1 = document.getElementById("openModal1");
const closeBtn1 = document.querySelector(".close1");

const modal2 = document.getElementById("myModal2");
const openBtn2 = document.getElementById("openModal2");
const closeBtn2 = document.querySelector(".close2");

const modal3 = document.getElementById("myModal3");
const openBtn3 = document.getElementById("openModal3");
const closeBtn3 = document.querySelector(".close3");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// modal 1
openBtn1.onclick = () => {
  modal1.style.display = "block";
};

closeBtn1.onclick = () => {
  modal1.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal1.style.display = "none";
  }
};

// modal 2
openBtn2.onclick = () => {
  modal2.style.display = "block";
};

closeBtn2.onclick = () => {
  modal2.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal2.style.display = "none";
  }
};

// modal 3
openBtn3.onclick = () => {
  modal3.style.display = "block";
};

closeBtn3.onclick = () => {
  modal3.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal3.style.display = "none";
  }
};
