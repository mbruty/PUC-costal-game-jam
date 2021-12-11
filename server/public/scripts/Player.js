class Player {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.forceX = 0;
    this.forceY = 0;
  }

  update(gameState) {
    // Player action: 1 up, 2: right, 3: down, 4: left
    // Handle player action
    if (
      this.forceX > 0 ||
      this.forceX < 0 ||
      this.forceY < 0 ||
      this.forceY > 0
    ) {
      return this.applyForce();
    }
    switch (gameState.playerAction) {
      case 1: //w north,up
        this.applyForce(0, -1);
        return;
      case 2: // d east,right
        this.applyForce(1, 0);
        return;
      case 3: //s south,down
        this.applyForce(0, 1);
        return;
      case 4: //a west,left
        this.applyForce(-1, 0);
        return;
    }
  }

  applyForce(dX, dY) {
    console.log({ x: this.forceX, y: this.forceY });
    if (dY === 1 || dY === -1) {
      this.forceY = dY;
    }
    if (dX === 1 || dX === -1) {
      this.forceX = dX;
    }

    if (this.forceX > 0) {
      this.x = Math.round((this.x + 0.1) * 10) / 10;
      this.forceX = Math.round((this.forceX - 0.1) * 10) / 10;
    }

    if (this.forceX < 0) {
      this.x = Math.round((this.x - 0.1) * 10) / 10;
      this.forceX = Math.round((this.forceX + 0.1) * 10) / 10;
    }

    if (this.forceY > 0) {
      this.y = Math.round((this.y + 0.1) * 10) / 10;
      this.forceY = Math.round((this.forceY - 0.1) * 10) / 10;
    }

    if (this.forceY < 0) {
      this.y = Math.round((this.y - 0.1) * 10) / 10;
      this.forceY = Math.round((this.forceY + 0.1) * 10) / 10;
    }
  }
  draw() {
    image(this.image, 8 * 64, 5 * 64, 64, 64);
    textSize(16);
    stroke(255);
    fill(255);
    text(`x: ${this.x}. y: ${this.y}`, 5, 80);
  }
}
