function connect() {
  const socket = io("ws://localhost:6969");
  socket.on("connect", () => alert("Connected"));
}
