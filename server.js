// creation of the server

const http = require("http");
const app = require("./app/app");
const { appConfig } = require("./app/config");
const { mongoConnect, redisConnect } = require("./app/database");
var path = require("path");

const server = http.createServer(app);

const PORT = appConfig.PORT;
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));
const startServer = async () => {
  // TO perform db connections ...
  await mongoConnect(); // connect to mongodb database..
  await redisConnect(); // connect to the redis database..
  server.listen(PORT, () => {
    console.log(`server started listening at ${PORT} ....`);
  });
};

startServer();
