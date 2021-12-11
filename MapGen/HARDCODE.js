function HARDCODE(map) {
  map[500][500] = 1;
  map[500][501] = 1;
  return map;
}

module.exports = HARDCODE;
