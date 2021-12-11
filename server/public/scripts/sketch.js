let sketchWidth = 1088; // 17 tiles wide
let sketchHeight = 704; // 11 tiles tall

const researchObjects = [
  {
    price: 50,
    unlocked: true,
    image: null,
  },
  {
    price: 100,
    unlocked: false,
    unlockPrice: 200,
    image: null,
  },
];

let state;
let mapObj = {
  WATER: 0,
  LAND: 1,
  SAND: 2,
};

function setup() {
  loadImages();
  state = new GameState(0, 500);
  state.gameObjects.push(new Windmill(501, 500)); // Always start the game with a windmill
  player = createCanvas(1088, 704);
  researchObjects[0].image = loadImage("images/windmill_1.png");
  researchObjects[1].image = images.wave_gen_1;
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
  var x = Math.floor(mouseX / 64);
  var y = Math.floor(mouseY / 64);
  zeroX = state.player.x - 8;
  zeroY = state.player.y - 5;

  console.log({ x: x + zeroX, y: y + zeroY });
  if (researchObjects[state.selectedItem]) {
    let newX = x + zeroX;
    let newY = y + zeroY;
    let collisions = state.gameObjects.filter(
      (x) => x.x === newX && x.y === newY
    );
    if (collisions.length !== 0) {
      return;
    }

    // If the player can afford
    let obj = researchObjects[state.selectedItem];
    if (obj.price > state.research) {
      return;
    }

    let objectData = {};
    // All good now
    switch (state.selectedItem) {
      case 0:
        state.gameObjects.push(new Windmill(newX, newY));
        objectData = {"type": "Windmill", "x": newX, "y": newY};
        state.research -= obj.price;
        break;

      case 1:
        if (
          state.map[newY][newX].type !== 0 ||
          state.map[newY - 1][newX].type !== 0
        ) {
          if (!obj.unlocked) {
            obj.unlocked = true;
            state.research -= Math.floor(obj.unlockPrice / 2);
          }
          return;
        }
        if (!obj.unlocked) {
          if (state.research > obj.unlockPrice) {
            obj.unlocked = true;
            state.research -= obj.unlockPrice;
          }
        } else {
          state.research -= obj.price;
        }
        state.gameObjects.push(new WaveGenerator(newX, newY));
    }

    // Send to server
    sendPlacedItem(objectData);
  }
}
