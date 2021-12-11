class Player {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
  }

  update(gameState, playerAction) {
    // Player action: 1 up, 2: right, 3: down, 4: left
  }

  draw() {
    image(this.image, 8 * 64 - 32, 5 * 64 - 32, 64, 64);
  }
}
