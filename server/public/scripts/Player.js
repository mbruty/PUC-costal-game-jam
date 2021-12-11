class Player {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.forceX = 0;
    this.forceY = 0;
    this.hasBeenInwater = false;
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
        this.image = images.playerUp
        return;
      case 2: // d east,right
        this.applyForce(1, 0);
        this.image = images.playerRight
        return;
      case 3: //s south,down
        this.applyForce(0, 1);
        this.image = images.playerDown
        return;
      case 4: //a west,left
        this.applyForce(-1, 0);
        this.image = images.playerLeft
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
    if (this.isOverWater()) {
      image(images.boat, 8 * 64, 5 * 64);
      this.hasBeenInwater = true;
    } else {
      image(this.image, 8 * 64, 5 * 64, 64, 64);
    }
    if (!this.isOverWater() && this.hasBeenInwater) {
      this.hasBeenInwater = false;
      state.gameObjects.push(new ShipWreck(Math.floor(this.x), Math.floor(this.y)));
    }
    textSize(16);
    stroke(255);
    fill(255);
    text(`x: ${this.x}. y: ${this.y}`, 5, 80);
  }

  isOverWater() {
    if (!state.map) return;
    let tempX;
    let tempY;
    if (this.forceX < 0 || this.forceY < 0) {
      tempX = Math.floor(this.x);
      tempY = Math.floor(this.y);
    } else {
      tempX = Math.ceil(this.x);
      tempY = Math.ceil(this.y);
    }

    const tile = state.map[tempY][tempX];
    return tile.type == 0;
  }
}
