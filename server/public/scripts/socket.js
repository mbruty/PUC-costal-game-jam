function connect() {
  const socket = io("ws://localhost:6969");
  socket.emit("player-join", "Mike");
  socket.on("connect", () => console.log("connect"));

  socket.on("send-map", (map) => {
    state.setMap(map);
    console.log(map);
  });
}
