const images = {};

function loadImages() {
  images.grass = loadImage("images/grass.png");
  images.water = loadImage("images/waves.png");
  images.sand = loadImage("images/sand.png");
  Object.freeze(images);
}
