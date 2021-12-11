function StartPoint(xMAX, yMAX) {
  Point = [];

  x = Math.floor(Math.random() * xMAX);
  y = Math.floor(Math.random() * yMAX);
  Point = [x, y];
  return Point;
}

module.exports = StartPoint;
