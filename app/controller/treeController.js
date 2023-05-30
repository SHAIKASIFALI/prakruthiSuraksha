const { Tree } = require("../model");
const xlsx = require("xlsx");
const fs = require("fs");
var nl2br = require("nl2br");
const httpFileUpload = async (req, res) => {
  try {
    // Read the uploaded Excel file
    const workbook = xlsx.readFile(req.file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    await Tree.insertMany(jsonData);
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error("Error clearing uploaded file:", err);
      } else {
        console.log("Uploaded file cleared");
      }
    });
    return res.status(200).send({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "error occurred",
    });
  }
};

const httpRenderTreeTemplate = async (req, res) => {
  try {
    const treeNo = req.params.treeId;
    const tree = await Tree.findOne({
      sNo: treeNo,
    });
    const treeObject = tree.toObject();
    treeObject.benefits = nl2br(tree.benefits);
    return res.render("index", { tree: treeObject });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "error occurred",
    });
  }
};
module.exports = {
  httpFileUpload,
  httpRenderTreeTemplate,
};
