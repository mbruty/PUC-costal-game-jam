class GameState {
  constructor(energy, research) {
    this.UI = new UI(energy, research);
    this.player = new Player(loadImage("images/player.png"), 100, 100);
    this.gameObjects = [this.player, this.UI];
    this.energy = energy;
    this.research = research;
    this.playerAction = null;
  }

  setPlayerAction(key) {
    if (key == null) {
      this.playerAction = null;
      return;
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
    this.gameObjects.forEach((obj) => {
      obj.draw();
    });
  }

  update(playerAction) {
    // Handle player action

    this.gameObjects.forEach((obj) => {
      obj.update(this);
    });

    // Update server with new data
  }
}
