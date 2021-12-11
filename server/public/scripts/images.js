const images = {};

function loadImages() {
  images.grass = loadImage("images/grass.png");
  images.water = loadImage("images/waves.png");
  images.sand = loadImage("images/sand.png");
  images.boat = loadImage("images/boat.png");
  images.playerUp = loadImage("images/player_back.png");
  images.playerLeft = loadImage("images/player_left.png");
  images.playerRight = loadImage("images/player_right.png");
  images.playerDown = loadImage("images/player_front.png");
  images.shipwreck = loadImage("images/shipwreck.png");
  images.wave_gen_1 = loadImage("images/wave_generator_1.png");
  images.wave_gen_2 = loadImage("images/wave_generator_2.png");
  Object.freeze(images);
}
