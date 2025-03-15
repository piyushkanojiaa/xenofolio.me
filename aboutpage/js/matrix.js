const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set canvas full-screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters
const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()";
const charArray = characters.split("");
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// Array to track falling positions
const drops = new Array(columns).fill(1);

function drawMatrix() {
  // Create a transparent black background to create a fading effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // Green color for characters
  ctx.font = fontSize + "px monospace";

  // Loop through drops array to draw characters
  for (let i = 0; i < drops.length; i++) {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop to start from the top randomly
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Redraw the matrix effect every 50 milliseconds
setInterval(drawMatrix, 50);

// Adjust canvas size when window is resized
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
