class Windmill extends EnergyGenerator {
  constructor(x, y) {
    super(x, y, 100, null);
    this.images = [];
    this.images.push(loadImage("images/windmill_1.png"));
    this.images.push(loadImage("images/windmill_2.png"));
    this.images.push(loadImage("images/windmill_3.png"));
  }

  draw() {
    super.image = this.images[Math.floor((frameCount % 30) / 10)];
    super.draw();
  }
}
