class EnergyGenerator {
  constructor(x, y, power, image) {
    this.x = x;
    this.y = y;
    this.power = power;
    this.image = image;
    state.energy += this.power;
  }

  draw() {
    push();
    translate(8 * 64, 5 * 64);
    image(
      this.image,
      (this.x - state.player.x) * 64,
      (this.y - state.player.y) * 64 - 64,
      64,
      128
    );
    pop();
  }

  update(state) {
    if (frameCount % 60 == 0) {
      state.energyCount += this.power;
    }
  }
}
