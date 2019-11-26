const createError = require("http-errors");
const Joi         = require("joi");

const log         = require("../../../core/logger");
const helper      = require("../../../core/helper");
const constant    = require("../../../core/constant");
const messages     = require("../../../core/messages");

const ModelUser    = require("../models/mod_user");
const Token       = require("./ctrl_token");

const { VALID } = constant;
const { MODULES_USER_LOGIN_ERROR } = messages;

const loginValidate = (obj) => {
  const schema = Joi.object({
    name: Joi.string().trim().regex(/^[a-zA-Z0-9_-]{4,30}$/).required(),
    pass: Joi.string().trim().max(30).required(),
  });

  const output = Joi.validate(obj, schema, { allowUnknown: true });
  if (output.error) {
    throw new createError.BadRequest(__(MODULES_USER_LOGIN_ERROR));
  }
};

exports.simpleLogin = async (req) => {
  log.info("user.simpleLogin() start.");

  const { name, pass } = req.body;

  try {
    // 1. check param
    loginValidate(req.body);

    const sha256Pass = helper.sha256(pass);
    const condition = { name, valid: VALID };
    const projection = "email name password";

    // 2. get user info
    const user = await ModelUser.getOne(condition, projection);
    if (!user || user.password !== sha256Pass) {
      throw new createError.BadRequest(__(MODULES_USER_LOGIN_ERROR));
    }

    delete user._doc.password;
    const obj  = { user: {}, token: "" };
    obj.user = user;

    // 3. create token
    const tokenObj = await Token.create(obj.user);
    obj.token = tokenObj.token;

    log.info("user.simpleLogin() end.");
    log.operation("simpleLogin", "login success!", obj.user);
    return obj;
  } catch (err) {
    log.info("user.simpleLogin() error.");
    log.error(err);
    throw err;
  }
};

exports.logout = async (req) => {
  log.info("user.logout() start.", req.user);
  try {
    await Token.delete(req.token);
    log.info("user.logout() end.", req.user);
    log.operation("logout", "logout success!", req.user);
  } catch (err) {
    log.info("user.logout() error.");
    log.error(err);
    throw err;
  }
};
