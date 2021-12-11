function BlurFunc(map) {
  var N, S, E, W;
  var BlurFactor = 2;
  for (i = 0; i < map.length; i++) {
    for (j = 0; j < map[i].length; j++) {
      //if water
      if (map[i][j] == 0) {
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
        if (N == 1) {
          sum = sum + 1;
        }
        if (S == 1) {
          sum = sum + 1;
        }
        if (E == 1) {
          sum = sum + 1;
        }
        if (W == 1) {
          sum = sum + 1;
        }
        //setBlur
        if (sum > BlurFactor) {
          map[i][j] = 3;
        }
      }
    }
  }
  return map;
}

module.exports = BlurFunc;
