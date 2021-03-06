const serverUpdateRate = 60; // How many frames to wait between sending updates to server

class GameState {
  constructor(energy, research) {
    this.UI = new UI(energy, research);
    this.player = new Player(images.playerDown, 500, 500);
    this.otherPlayers = {};
    this.gameObjects = [this.player, this.UI];
    this.energy = energy;
    this.research = research;
    this.playerAction = null;
    this.map = null;
    this.selectedItem = 0;
    this.energyCount = 0;
  }

  setMap(map) {
    this.map = map;
  }

  setPlayerAction(key) {
    if (key == null) {
      this.playerAction = null;
      return;
    }

    // If the input is a number
    let num = parseInt(key);
    if (!isNaN(num) && num > 0) {
      this.selectedItem = num - 1;
    }
    switch (key.toLowerCase()) {
      case "w":
        this.playerAction = 1;
        break;
      case "d":
        this.playerAction = 2;
        break;
      case "s":
        this.playerAction = 3;
        break;
      case "a":
        this.playerAction = 4;
        break;
      default:
        this.playerAction = null;
    }
  }

  draw() {
    this.drawMap();
    this.gameObjects.forEach((obj) => {
      obj.draw();
    });
    for (let p in this.otherPlayers) {
      this.otherPlayers[p].draw();
    }
    this.UI.draw();
  }

  drawMap() {
    if (!this.map) {
      return;
    }

    for (let y = 0; y < 11; y++) {
      push();
      translate(0, y * 64);
      for (let x = 0; x < 17; x++) {
        push();
        translate(x * 64, 0);
        this.drawMapTile(x, y);
        pop();
      }
      pop();
    }
  }

  drawMapTile(offsetX, offsetY) {
    let xZero;
    let yZero;
    if (this.player.forceX < 0 || this.player.forceY < 0) {
      xZero = Math.floor(this.player.x - 8);
      yZero = Math.floor(this.player.y - 5);
    } else {
      xZero = Math.ceil(this.player.x - 8);
      yZero = Math.ceil(this.player.y - 5);
    }

    const tile = this.map[yZero + offsetY][xZero + offsetX];
    switch (tile.type) {
      case 0:
        image(
          images.water,
          this.player.forceX * 64,
          this.player.forceY * 64,

          64,
          64
        );
        break;
      case 1:
        image(
          images.grass,
          this.player.forceX * 64,
          this.player.forceY * 64,
          64,
          64
        );
        break;
      case 3:
        image(
          images.sand,
          this.player.forceX * 64,
          this.player.forceY * 64,
          64,
          64
        );
    }
  }

  update(playerAction) {
    // Handle player action

    this.gameObjects.forEach((obj) => {
      obj.update(this);
    });

    // Update server with new data once every 60 frames
    if (frameCount % 10 === 0) {
      sendState(this);
    }

    while (this.energyCount >= 100) {
      this.energyCount -= 100;
      this.research++;
    }
  }

  addOtherPlayer(newPlayer) {
    this.otherPlayers[newPlayer.id] = new OtherPlayer(
      newPlayer.id,
      images.playerDown,
      500,
      500
    );
  }
}
