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
    this.drawItems();
  }

  drawResearch() {
    push();
    translate(sketchWidth - 300, sketchHeight - 50);
    stroke("#292929");
    fill(255);
    rect(0, 0, 300, 50, 40, 0, 0, 0);
    textSize(20);
    fill(0);
    text(`🧪 Research : ${state.research}`, 20, 40);
    pop();
  }

  drawEnergy() {
    push();
    translate(0, sketchHeight - 50);
    stroke("#292929");
    fill(255);
    rect(0, 0, 250, 50, 0, 40, 0, 0);
    textSize(20);
    fill(0);
    text(`⚡️ Energy : ${state.energy} / s`, 10, 40);
    pop();
  }

  drawItems() {
    push();
    translate(300, sketchHeight - 50);
    rect(0, 0, 450, 50);
    for (let i = 0; i < 9; i++) {
      fill(255);
      if (state.selectedItem === i) {
      } else {
        stroke(0);
        strokeWeight(1);
      }
      rect(i * 50, 0, 50, 50);
      textSize(8);
      fill(0);
      text(i, i * 50 + 5, 40);
    }

    // Draw the selected item over everything else
    stroke(64);
    fill(255);
    strokeWeight(4);
    rect(state.selectedItem * 50, 0, 50, 50);
    fill(0);
    strokeWeight(1);
    text(state.selectedItem, state.selectedItem * 50 + 5, 40);
    pop();
  }
}
