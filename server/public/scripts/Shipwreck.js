class ShipWreck extends EnergyGenerator {
  constructor(x, y) {
    super(x, y, 0, null);
    super.image = images.shipwreck;
  }

  draw() {
    push();
    translate(8 * 64, 5 * 64);
    image(
      this.image,
      (this.x - state.player.x) * 64,
      (this.y - state.player.y) * 64,
      64,
      64
    );
    pop();
  }
}
