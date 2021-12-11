const StartPoint = require("./StartPoint");

function RiverGen(map) {
  //console.log(startPoint);

  var rivers = Math.round(map.length / 300);

  var Amax = 0;
  var Amin = 5;
  var Bmax = 5;
  var Bmin = 95;

  for (j = 0; j < rivers; j++) {
    var randx = j * 300 + Math.floor(Math.random() * 300);

    var A = Math.floor(Math.random() * (Amax - Amin + 1) + Amin);
    var B = Math.floor(Math.random() * (Bmax - Bmin + 1) + Bmin) / 100;
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
