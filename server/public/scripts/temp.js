let chunkSize = 16;

function MapGen(x, y) {
  var map = [];
  var Temp = WNGen(chunkSize, chunkSize);

  for (let i = 0; i < chunkSize; i++) {
    map[i] = [];
    for (let j = 0; j < chunkSize; j++) {
      rng = Math.random();
      if (rng * (i / 16) < 0.5) {
        map[i][j] = 0;
      } else {
        map[i][j] = 1;
      }
    }
  }

  return map;
}

function WNGen(x, y) {
  var map = [];

  for (let i = 0; i < x; i++) {
    map[i] = [];
    for (let j = 0; j < y; j++) {
      map[i][j] = Math.random();
    }
  }
  return map;
}
