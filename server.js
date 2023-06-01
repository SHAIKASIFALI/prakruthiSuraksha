// creation of the server

const express = require("express");
const http = require("http");
const app = require("./app/app");
const { appConfig } = require("./app/config");
const { mongoConnect, redisConnect } = require("./app/database");
var path = require("path");
var CronJob = require("cron").CronJob;
const axios = require("axios");
var job = new CronJob(
  "5 * * * *",
  async function () {
    return await axios.get("https://prakruthisuraksha.onrender.com/api/tree/1");
  },
  null,
  false,
  "America/Los_Angeles"
);
const server = http.createServer(app);

const PORT = appConfig.PORT;
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "public")));
const startServer = async () => {
  // TO perform db connections ...
  await mongoConnect(); // connect to mongodb database..
  await redisConnect(); // connect to the redis database..
  server.listen(PORT, () => {
    console.log(`server started listening at ${PORT} ....`);
  });
  job.start();
};

startServer();
