const images = {};

function loadImages() {
  images.grass = loadImage("images/grass.png");
  images.water = loadImage("images/waves.png");
  images.sand  = loadImage("images/sand.png");
  images.boat  = loadImage("images/boat.png");
  Object.freeze(images);
}
