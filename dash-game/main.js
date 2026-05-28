const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let keys = {};

document.addEventListener("keydown", e => {
  keys[e.code] = true;
});

document.addEventListener("keyup", e => {
  keys[e.code] = false;
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePlayer();
  updateLevel();

  requestAnimationFrame(gameLoop);
}

gameLoop();
