const mongoose   = require("mongoose");

const Model           = require("../../../core/model");
const constant        = require("../../../core/constant");

const { DB_NAME_ISSUE, SCHEMA_TOKEN } = constant;

const { Schema } = mongoose;
const { Mixed }   = Schema.Types;

const Token = new Schema({
  token:           { type: String, description: "" },
  user:            { type: Mixed, description: "" },
  expires:         { type: Date, description: "" },
});

const ModelToken = new Model(DB_NAME_ISSUE, SCHEMA_TOKEN, Token);

module.exports = ModelToken;
