const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const treeSchema = new Schema({
  sNo: {
    type: String,
    required: true,
    unique: true,
  },
  treeName: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
  },
  typeNumber: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  diameter: {
    type: String,
    required: true,
  },
  co2Absorbed: {
    type: String,
    required: true,
  },
  averageco2Absorbed: {
    type: String,
    required: true,
  },
  lattitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
});

const Tree = mongoose.model("Tree", treeSchema);

module.exports = Tree;
