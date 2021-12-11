let socket;
function connect() {
  socket = io("ws://localhost:8000");
  socket.emit("player-join", "Mike");
  socket.on("connect", () => console.log("connect"));

  socket.on("send-map", (map) => {
    state.setMap(map);
    console.log(map);
  });

  socket.on("send-players", players => {
    for (let i in players){
      state.addOtherPlayer(players[i]);
    }
  });

  socket.on("player-move", (playerId, x, y) => {
    console.log(`New position of player: ${playerId} is x: ${x}, ${y}`);
    if (state.otherPlayers[playerId] instanceof OtherPlayer && isValidPos(x) && isValidPos(y)){
      state.otherPlayers[playerId].update(x, y);
    }
  });

  socket.on("new-player", newPlayer => {
    state.addOtherPlayer(newPlayer);
  });
}

function sendState(gameState){
  // Send local state to server
  socket.emit('update-position', gameState.player.x, gameState.player.y);
}
