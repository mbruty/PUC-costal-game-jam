let gameobjects = [];
let ui;
let gameState = {};
let sketchWidth = 756;
let sketchHeight = 1024;

let map = [];

let mapObj = {
  WATER: 0,
  LAND: 1,
  SAND: 2,
};

function setup() {
  // ToDo fetch map from server
  ui = new UI(100, 255);
  gameobjects.push(ui);
  createCanvas(1024, 756);
  frameRate(60);

  map = MapGen(1, 1);

  console.log(map);
}

function draw() {
  background("rgba(0, 255, 0, 0.25)");
  drawMiniMap();
  gameobjects.forEach((obj) => {
    obj.update(gameState);
    obj.draw();
  });
}

function drawMiniMap() {
  noStroke();
  push();
  for (let i = 0; i < map.length; i++) {
    push();
    translate(0, i * 4);
    for (let j = 0; j < map[i].length; j++) {
      switch (map[i][j]) {
        case 0:
          fill("blue");
          break;
        case 1:
          fill("green");
          break;
        case 2:
          fill("yellow");
          break;
      }
      rect(j * 4, 0, 4, 4);
    }
    pop();
  }
  pop();
}
