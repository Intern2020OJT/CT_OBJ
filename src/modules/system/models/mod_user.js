const SchemaCommon    = require("../../mod_base");

const Model           = require("../../../core/model");
const constant        = require("../../../core/constant");

const { DB_NAME_ISSUE, SCHEMA_USER } = constant;

const { BaseSchema } = SchemaCommon;

const User = new BaseSchema({
  name:              { type: String, description: "用户ID" },
  password:          { type: String, description: "密码" },
  fullName:          { type: String, description: "姓名" },
  email:             { type: String, description: "邮箱" },
});

const ModelUser = new Model(DB_NAME_ISSUE, SCHEMA_USER, User);

module.exports = ModelUser;
