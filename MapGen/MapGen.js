const WNGen = require("./WNGen");
const BlurFunc = require("./BlurFunc");

console.log(MapGen(1, 1));

function MapGen(x, y) {
  const ChunkSize = 1000;
  var map = [];
  var Temp = WNGen(ChunkSize, ChunkSize);

  for (let i = 0; i < ChunkSize; i++) {
    map[i] = [];
    for (let j = 0; j < ChunkSize; j++) {
      rng = Math.random();
      if (rng * (i / (ChunkSize / 2)) < 0.5) {
        map[i][j] = 0;
      } else {
        map[i][j] = 1;
      }
    }
  }
  map = BlurFunc(map);
  return map;
}

module.exports = MapGen;
