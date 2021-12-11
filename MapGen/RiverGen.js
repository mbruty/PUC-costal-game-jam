const StartPoint = require("./StartPoint");

function RiverGen(map) {
  //console.log(startPoint);
  maxA = 0;
  minA = 5;

  maxB = 5;
  minB = 95;

  var rivers = Math.round(map.length / 300);

  for (j = 0; j < rivers; j++) {
    var randx = j * 300 + Math.floor(Math.random() * 300);

    var A = Math.floor(Math.random() * (maxA - minA + 1) + minA);
    var B = Math.floor(Math.random() * (maxB - minB + 1) + minB) / 100;
    for (i = 0; i < map.length; i++) {
      var temp = Math.round(A * Math.sin(B * i));
      map[i][randx - 1 + temp] = 0;
      map[i][randx + temp] = 0;
      map[i][randx + 1 + temp] = 0;
    }
  }
  return map;
}

module.exports = RiverGen;
