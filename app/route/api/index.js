//This contains only the  api routes...
const express = require("express");
const treeRouter = require("./treeRoute");

const apiRouter = express.Router();

apiRouter.use("/trees", treeRouter);

module.exports = apiRouter;
