let sketchWidth = 640;
let sketchHeight = 1024;

let state;
let mapObj = {
  WATER: 0,
  LAND: 1,
  SAND: 2,
};

function setup() {
  state = new GameState(100, 255);
  player = createCanvas(1024, 640);
  frameRate(60);

  map = MapGen(1, 1);

  console.log(map);
}

function draw() {
  background("rgba(0, 255, 0, 0.25)");
  drawMiniMap();
  state.update();
  state.draw();
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
function keyPressed() {
  state.setPlayerAction(key);
}

function keyReleased() {
  state.setPlayerAction(null);
}
