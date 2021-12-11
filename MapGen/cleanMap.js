function cleanMap(map) {
  var N, S, E, W;
  for (i = 0; i < map.length; i++) {
    for (j = 0; j < map[i].length; j++) {
      //if water
      if (map[i][j] == 1) {
        var sum = 0;
        //check environment
        if (j != 0) {
          N = map[i][j - 1];
        }
        if (j != map.length - 1) {
          S = map[i][j + 1];
        }
        if (i != 0) {
          E = map[i - 1][j];
        }
        if (i != map.length - 1) {
          W = map[i + 1][j];
        }

        //checkBlur
        if (N == 0) {
          sum = sum + 1;
        }
        if (S == 0) {
          sum = sum + 1;
        }
        if (E == 0) {
          sum = sum + 1;
        }
        if (W == 0) {
          sum = sum + 1;
        }
        //setBlur
        if (sum == 4) {
          map[i][j] = 0;
        }
      }
    }
  }
  return map;
}

module.exports = cleanMap;
