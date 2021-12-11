const WNGen = require("./WNGen");
const BlurFunc = require("./BlurFunc");
const RiverGen = require("./RiverGen");
const cleanMap = require("./cleanMap");

//console.log(MapGen(1, 1));

function MapGen(x, y) {
  const ChunkSize = 1000;
  var map = [];

  for (let i = 0; i < ChunkSize; i++) {
    map[i] = [];
    for (let j = 0; j < ChunkSize; j++) {
      if (i < ChunkSize / 8) {
        map[i][j] = 0;
      } else if (ChunkSize - i < ChunkSize / 2) {
        map[i][j] = 1;
      } else {
        rng = Math.random();
        if (rng * (i / (ChunkSize / 2)) < 0.2) {
          map[i][j] = 0;
        } else {
          map[i][j] = 1;
        }
      }
    }
  }
  map = cleanMap(map);
  map = BlurFunc(map);
  map = RiverGen(map);

  return map;
}

module.exports = MapGen;
