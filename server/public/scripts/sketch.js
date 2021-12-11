let sketchWidth = 1088; // 17 tiles wide
let sketchHeight = 704; // 11 tiles tall

let state;
let mapObj = {
  WATER: 0,
  LAND: 1,
  SAND: 2,
};

function setup() {
  loadImages();
  state = new GameState(0, 0);
  state.gameObjects.push(new Windmill(501, 500)); // Always start the game with a windmill
  player = createCanvas(1088, 704);
  frameRate(60);

  connect();
}

function draw() {
  background("rgba(29, 29, 29, 0.25)");
  // drawMiniMap();
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
