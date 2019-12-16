const SchemaCommon    = require("../../mod_base");
 
const Model           = require("../../../core/model");
const constant        = require("../../../core/constant");
 
 
const { DB_NAME_ISSUE, SCHEMA_SXL } = constant;

const { BaseSchema } = SchemaCommon;

const Test = new BaseSchema({

 name:              { type: String, description: "name" },
 issues:            { type: Array, description: "issues" }, 
 openissues:        { type: Number, description: "openissues"}, 
 watchers:          { type: Number, description: "watchers"},
 languages:         { type: Array, description: "language" },

});

const ModelTest = new Model(DB_NAME_ISSUE, SCHEMA_SXL, Test);

module.exports = ModelTest;
