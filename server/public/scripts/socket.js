let socket;
function connect() {
  socket = io("ws://costal-factorio.herokuapp.com/");
  socket.emit("player-join", "Mike");
  socket.on("connect", () => console.log("connect"));

  socket.on("send-map", (map) => {
    state.setMap(map);
    console.log(map);
  });

  socket.on("send-players", (players) => {
    for (let i in players) {
      state.addOtherPlayer(players[i]);
    }
  });

  socket.on("player-move", (playerId, x, y) => {
    console.log(`New position of player: ${playerId} is x: ${x}, ${y}`);
    if (
      state.otherPlayers[playerId] instanceof OtherPlayer &&
      isValidPos(x) &&
      isValidPos(y)
    ) {
      state.otherPlayers[playerId].update(x, y);
    }
  });

  socket.on("new-player", (newPlayer) => {
    state.addOtherPlayer(newPlayer);
  });

  socket.on("item-placed", (itemData) => {
    switch (itemData.type) {
      case "Windmill":
        state.gameObjects.push(new Windmill(itemData.x, itemData.y));
        break;
      case "WaveGenerator":
        state.gameObjects.push(new WaveGenerator(itemData.x, itemData.y));
    }
  });
}

function sendState(gameState) {
  // Send local state to server
  socket.emit("update-position", gameState.player.x, gameState.player.y);
}

function sendPlacedItem(itemData) {
  socket.emit("place", itemData);
}

function updateResearch(newAmount) {
  socket.emit("update-research", newAmount);
}

function sendPlacedItem(itemData) {
  socket.emit("place", itemData);
}

function updateResearch(newAmount) {
  socket.emit("update-research", newAmount);
}
