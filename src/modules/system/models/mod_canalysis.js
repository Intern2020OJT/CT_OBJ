const SchemaCommon    = require("../../mod_base");
 
const Model           = require("../../../core/model");
const constant        = require("../../../core/constant");
 
 
const { DB_NAME_ISSUE, SCHEMA_SXL } = constant;

const { BaseSchema } = SchemaCommon;

const Test = new BaseSchema({
 name:              { type: String, description: "横坐标" },
 issues:            { type: Array, description: "纵坐标" }, 
 openissues:        { type: Number, description: "纵坐标"}, 
 people:            { type: Number, description: "纵坐标"},
 lanuage:         { type: Array, description: "纵坐标"},
 watchers:          { type: Number, description: "纵坐标"}
});

const ModelTest = new Model(DB_NAME_ISSUE, SCHEMA_SXL, Test);

module.exports = ModelTest;
