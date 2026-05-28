function updateLevel() {

  // Move world
  for (let obj of objects) {

    obj.x -= player.speed;

    ctx.fillStyle = "red";

    if (obj.type === "block") {
      ctx.fillStyle = "white";
    }

    ctx.fillRect(
      obj.x,
      obj.y,
      obj.width,
      obj.height
    );

    // Collision
    if (
      player.x < obj.x + obj.width &&
      player.x + player.width > obj.x &&
      player.y < obj.y + obj.height &&
      player.y + player.height > obj.y
    ) {

      if (obj.type === "spike") {
        location.reload();
      }
    }
  }

  // Portals
  for (let portal of portals) {

    portal.x -= player.speed;

    ctx.fillStyle = "lime";

    ctx.fillRect(
      portal.x,
      portal.y,
      portal.width,
      portal.height
    );

    // Portal collision
    if (
      player.x < portal.x + portal.width &&
      player.x + player.width > portal.x &&
      player.y < portal.y + portal.height &&
      player.y + player.height > portal.y
    ) {

      player.mode = portal.mode;
    }
  }
}
