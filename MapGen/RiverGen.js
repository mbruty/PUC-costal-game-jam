const StartPoint = require("./StartPoint");

function RiverGen(map) {
  //console.log(startPoint);

  var rivers = Math.round(map.length / 300);

  for (j = 0; j < rivers; j++) {
    var randx = j * 300 + Math.floor(Math.random() * 300);

    var A = Math.floor(Math.random() * 5);
    var B = Math.floor(Math.random() * 100) / 100;
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
