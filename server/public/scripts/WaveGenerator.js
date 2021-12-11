class WaveGenerator extends EnergyGenerator {
  constructor(x, y) {
    super(x, y, 40, null);
    this.images = [];
    this.images.push(loadImage("images/wave_generator_1.png"));
    this.images.push(loadImage("images/wave_generator_2.png"));
  }

  draw() {
    super.image = this.images[Math.floor((frameCount % 20) / 10)];
    super.draw();
  }
}
