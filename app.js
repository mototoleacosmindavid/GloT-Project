"use strict";

require("dotenv").config();
const Engine = require("./RoutingEngine/Engine");
const usersRouter = require("./Api/Users");
const attacksRouter = require("./Api/Attacks");

const PORT = process.env.PORT || 3000;

console.log(__dirname);
const app = new Engine();

app.useStaticFiles("front");

app.use("/api/users", usersRouter);
app.use("/api/attacks", attacksRouter);

app.get("/", async (req, res) => {
  const absolutePath = `${__dirname}\\front\\GloT_homepage.html`;
  console.log(absolutePath);
  await res.sendFileByPath(absolutePath);
});

app.get("/favicon.ico", async (req, res) => {
  const absolutePath = `${__dirname}\\front\\favicon.ico`;
  console.log(absolutePath);
  await res.sendFileByPath(absolutePath);
});

app.listen(PORT, () => {
  console.log(`Server started listening on ${PORT}`);
});
