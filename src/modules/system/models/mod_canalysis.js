const SchemaCommon    = require("../../mod_base");
 
const Model           = require("../../../core/model");
const constant        = require("../../../core/constant");
 
 
const { DB_NAME_ISSUE, SCHEMA_SXL } = constant;

const { BaseSchema } = SchemaCommon;

const Test = new BaseSchema({

 name:              { type: String, description: "项目名字" },
 _id:               { type: String, description: "创建人" },
 number:            { type: String, description: "数量" },
});

const ModelTest = new Model(DB_NAME_ISSUE, SCHEMA_SXL, Test);

module.exports = ModelTest;
