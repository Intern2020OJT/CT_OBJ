const SchemaCommon    = require("../../mod_base");

const Model           = require("../../../core/model");
const constant        = require("../../../core/constant");

const { DB_NAME_ISSUE, SCHEMA_ANALYSEROWS } = constant;

const { BaseSchema } = SchemaCommon;

const AnalyseRows = new BaseSchema({
  url:              { type: String, description: "html-url" },
  title:            { type: String, description: "title" },
  labels:           { type: Array, description: "labels" },
  state:            { type: String, description: "state" },
  assignees:        { type: Array, description: "assignees" },
  comments:         { type: Number, description: "comments" },
  createdat:        { type: Date, description: "createdat" },
  closedat:         { type: Date, description: "closedat" }
});

const ModelAnalyseRows = new Model(DB_NAME_ISSUE, SCHEMA_ANALYSEROWS, AnalyseRows);

module.exports = ModelAnalyseRows;