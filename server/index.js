const express = require("express");
const path = require("path");
const app = express();

const config = require("./config");
const Direction = require("./Direction");
const Player = require("./Player");
const Map = require("./Map");

(async () => {
  app.use(express.static(path.join(__dirname, "./public")));
  await new Promise((resolve) => app.listen(8000, resolve));
  console.log("🚀 Server blasting off at http://localhost:8000");
})();

const { Server } = require("socket.io");
const io = new Server({
  cors: {
    origin: "http://localhost:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// All connected players
let players = {};
let highestPlayerId = 0;  // TODO: Update this from file when loading in players

let map = new Map();
map.generate();

io.on("connection", (socket) => {
  console.log("connection");

  socket.on("player-join", (username) => {
    highestPlayerId += 1;
    let newPlayer = new Player(highestPlayerId, username);
    players[socket.id] = newPlayer;
    sendState(socket);
    // Notify existing players of the new player
    socket.broadcast.emit("new-player", newPlayer);
  });

  socket.on("player-move", (direction) => {});

  socket.on("place", (itemId) => {});

  socket.on("break", (coords) => {});

  socket.on("get-map", (coords) => {
    // Send 18 * 9 area of the map, centred on the pixel at given coords
  });
});

function sendState(socket) {
  // Send the game state (map, players, etc...) to the given socket
  socket.emit("send-map", map.mapList);
  socket.emit("send-players", players);
}

io.listen(config.socketPort);
