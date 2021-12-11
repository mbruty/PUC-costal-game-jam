class UI {
  constructor(currPower, currResearch) {
    this.power = currPower;
    this.research = currResearch;
  }

  setPower(power) {
    this.power = power;
  }

  setResearch(research) {
    this.research = research;
  }

  update() {
    return;
  }

  draw() {
    this.drawEnergy();
    this.drawResearch();
  }

  drawResearch() {
    push();
    translate(sketchHeight - 300, sketchWidth - 50);
    stroke("#292929");
    fill(255);
    rect(0, 0, 300, 50, 40, 0, 0, 0);
    textSize(32);
    fill(0);
    text(`🧪 Research : ${this.research}`, 20, 40);
    pop();
  }

  drawEnergy() {
    push();
    translate(0, sketchWidth - 50);
    stroke("#292929");
    fill(255);
    rect(0, 0, 250, 50, 0, 40, 0, 0);
    textSize(32);
    fill(0);
    text(`⚡️ Energy : ${this.power}`, 10, 40);
    pop();
  }
}
