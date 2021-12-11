const express = require("express");
const path = require("path");
const app = express();

const config = require('./config');
const Direction = require('./Direction');

(async () => {
  app.use(express.static(path.join(__dirname, "./public")));
  await new Promise((resolve) => app.listen(8000, resolve));
  console.log("🚀 Server blasting off at http://localhost:8000");
})();

const io = require('socket.io')(config.socketPort);

io.on("connection", socket => {
  socket.on('player-move', direction => {

  });

  socket.on('place', itemId => {

  });

  socket.on('break', coords => {
    
  });

  socket.on('get-map', coords => {
    // Send 18 * 9 area of the map, centred on the pixel at given coords
  });
});
