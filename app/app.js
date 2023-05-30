// initialisation of the express application
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./route/api");

// const apiRouter = require("./route/api");

const app = express();
// Set EJS as the view engine
app.set("view engine", "ejs");
app.use("/static", express.static("static"));
// Set the views directory
app.set("views", __dirname + "/view");
app.use(cors()); // to allow cross origin request
app.use(bodyParser.json()); // to parse the request body
// configuring base url for the api
app.use("/api", apiRouter);

module.exports = app;
