const express = require("express");
const path = require("path");
const app = express();

(async () => {
  app.use(express.static(path.join(__dirname, "./public")));
  await new Promise((resolve) => app.listen(8000, resolve));
  console.log("🚀 Server blasting off at http://localhost:8000");
})();
