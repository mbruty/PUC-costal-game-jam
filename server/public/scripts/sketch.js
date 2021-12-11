let sketchWidth = 1088; // 17 tiles wide
let sketchHeight = 704; // 11 tiles tall

const researchObjects = [
  {
    price: 50,
    unlocked: true,
    image: null,
  },
  // wave: {
  //   price: 100,
  //   unlocked: false,
  //   unlockPrice: 100,
  //   image: null,
  // },
];

let state;
let mapObj = {
  WATER: 0,
  LAND: 1,
  SAND: 2,
};

function setup() {
  loadImages();
  state = new GameState(0, 49);
  state.gameObjects.push(new Windmill(501, 500)); // Always start the game with a windmill
  player = createCanvas(1088, 704);
  researchObjects[0].image = loadImage("images/windmill_1.png");
  frameRate(60);

  connect();
}

function draw() {
  background("rgba(29, 29, 29, 0.25)");
  state.update();
  state.draw();
  try {
    image(
      researchObjects[state.selectedItem].image,
      mouseX - 16,
      mouseY - 32,
      32,
      32
    );
  } catch (e) {}
}

function keyPressed() {
  state.setPlayerAction(key);
}

function keyReleased() {
  state.setPlayerAction(null);
}

function mousePressed() {
  var x = mouseX;
  var y = mouseY;
}
