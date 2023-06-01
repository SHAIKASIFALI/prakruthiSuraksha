const express = require("express");
const treeRouter = express.Router();

const multer = require("multer");
const {
  httpFileUpload,
  httpRenderTreeTemplate,
} = require("../../controller/treeController");
const upload = multer({ dest: "tmp/" });

treeRouter.post("/upload", upload.single("excelFile"), httpFileUpload);
treeRouter.get("/:treeId", httpRenderTreeTemplate);

module.exports = treeRouter;
