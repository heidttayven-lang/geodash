const player = {
  x: 100,
  y: 300,

  width: 40,
  height: 40,

  velocityY: 0,
  gravity: 0.8,

  grounded: false,

  mode: "cube",

  speed: 6
};

function updatePlayer() {

  // CUBE MODE
  if (player.mode === "cube") {

    player.velocityY += player.gravity;
    player.y += player.velocityY;

    if (keys["Space"] && player.grounded) {
      player.velocityY = -15;
      player.grounded = false;
    }
  }

  // SHIP MODE
  if (player.mode === "ship") {

    if (keys["Space"]) {
      player.velocityY -= 0.6;
    } else {
      player.velocityY += 0.4;
    }

    player.y += player.velocityY;
  }

  // WAVE MODE
  if (player.mode === "wave") {

    if (keys["Space"]) {
      player.y -= 8;
    } else {
      player.y += 8;
    }
  }

  // BALL MODE
  if (player.mode === "ball") {

    player.velocityY += player.gravity;
    player.y += player.velocityY;
  }

  // Ground collision
  if (player.y > 500) {
    player.y = 500;
    player.velocityY = 0;
    player.grounded = true;
  }

  // Draw player
  ctx.fillStyle = "cyan";
  ctx.fillRect(
    player.x,
    player.y,
    player.width,
    player.height
  );
}
