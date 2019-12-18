const mongoose   = require("mongoose");

const Model           = require("../../../core/model");
const constant        = require("../../../core/constant");

const { DB_NAME_ISSUE, SCHEMA_ANALYSEROW } = constant;

const { Schema } = mongoose;

const AnalyseRow = new Schema({
  htmlurl:              { type: String, description: "html-url" },
  title:                { type: String, description: "title" },
  labels:               { type: Array, description: "labels" },
  state:                { type: String, description: "state" },
  assignees:            { type: Array, description: "assignees" },
  comments:             { type: Number, description: "comments" },
  createdat:            { type: String, description: "createdat" },
  closedat:             { type: String, description: "closedat" },
});

const ModelAnalyseRows = new Model(DB_NAME_ISSUE, SCHEMA_ANALYSEROW, AnalyseRow);

module.exports = ModelAnalyseRows;
