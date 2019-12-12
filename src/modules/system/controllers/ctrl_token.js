const crypto        = require("crypto");
const createError   = require("http-errors");

const log          = require("../../../core/logger");
const app           = require("../../../../config/app");

const ModelToken   = require("../models/mod_token");

const { tokenLength,  tokenExpires } = app;

exports.create = async (user) => {
  const token = crypto.randomBytes(tokenLength).toString("hex");
  const expires = new Date(Date.now() + tokenExpires);
  const obj = { token, user, expires };
  try {
    const result = await ModelToken.create(obj);
    log.operation("create", "token has been created successfully!", {});
    return result;
  } catch (err) {
    log.error(err);
    throw err;
  }
};

exports.verify = async (token) => {
  try {
    const condition = { token };
    const tokenObj = await ModelToken.getOne(condition, "");
    if (!tokenObj || tokenObj.expires < new Date()) {
      throw new createError.Unauthorized();
    }
    return tokenObj;
  } catch (err) {
    log.error(err);
    throw err;
  }
};

exports.update = async (token) => {
  const condition = { token };
  const expires = new Date(Date.now() + tokenExpires);
  const obj = { expires };
  try {
    const tokenObj = await ModelToken.updateByCondition(condition, obj, {});
    if (!tokenObj) {
      throw new createError.Unauthorized();
    }
  } catch (err) {
    log.error(err);
    throw err;
  }
};

exports.delete = async (token) => {
  const condition = { token };
  try {
    const result = await ModelToken.delete(condition);
    return result;
  } catch (err) {
    log.error(err);
    throw err;
  }
};
