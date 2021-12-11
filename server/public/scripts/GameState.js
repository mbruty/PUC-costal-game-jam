class GameState {
  constructor(energy, research) {
    this.UI = new UI(energy, research);
    this.player = new Player(loadImage("images/player.png"));
    this.gameObjects = [this.player, this.UI];
    this.energy = energy;
    this.research = research;
  }

  draw() {
    this.gameObjects.forEach((obj) => {
      obj.draw();
    });
  }

  update(playerAction) {
    // Handle player action

    this.gameObjects.forEach((obj) => {
      obj.update(this, playerAction);
    });

    // Update server with new data
  }
}
