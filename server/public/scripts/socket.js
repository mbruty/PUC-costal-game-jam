let socket;
function connect() {
  socket = io("ws://localhost:6969");
  socket.emit("player-join", "Mike");
  socket.on("connect", () => console.log("connect"));

  socket.on("send-map", (map) => {
    state.setMap(map);
    console.log(map);
  });

  socket.on("player-move", (playerId, x, y) => {
    console.log(`New position of player: ${playerId} is x: ${x}, ${y}`);
  });
}

function sendState(gameState){
  // Send local state to server
  socket.emit('update-position', gameState.player.x, gameState.player.y);
}
