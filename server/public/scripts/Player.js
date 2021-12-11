class Player {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }

  update(gameState) {
    // Player action: 1 up, 2: right, 3: down, 4: left
    if (frameCount % 30 == 0) {
      // Handle player action
      switch (gameState.playerAction) {
        case 1: //w north,up
          this.y -= 1;
          break;
        case 2: // d east,right
          this.x += 1;
          break;
        case 3: //s south,down
          this.y += 1;
          break;
        case 4: //a west,left
          this.x -= 1;
          break;
      }
    }
  }

  draw() {
    image(this.image, 8 * 64 - 32, 5 * 64 - 32, 64, 64);
    textSize(16);
    stroke(255);
    fill(255);
    text(`x: ${this.x}. y: ${this.y}`, 5, 80);
    console.log(this);
  }
}
