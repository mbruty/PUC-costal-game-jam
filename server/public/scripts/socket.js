let socket;
function connect() {
  socket = io("ws://localhost:8000");
  socket.emit("player-join", "Mike");
  socket.on("connect", () => console.log("connect"));

  socket.on("send-map", (map) => {
    state.setMap(map);
    console.log(map);
  });

  socket.on();
}
