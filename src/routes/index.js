const createError = require("http-errors");
const system      = require("./r_system");
const auth        = require("../middleware/auth");
const config      = require("../../config/app");
const response    = require("../core/response");
const log         = require("../core/logger");
const ctrlUser    = require("../modules/system/controllers/ctrl_user");
const ctrlCardone    = require("../modules/system/controllers/ctrl_cardone");
const ctrlCardtwo    = require("../modules/system/controllers/ctrl_cardtwo");
const ctrlCardthree    = require("../modules/system/controllers/ctrl_cardthree");
const appName  = config.name;

module.exports = (app) => {
  app.post(`/${appName}/login`, async (req, res) => {
    try {
      const result = await ctrlUser.simpleLogin(req);
      response.sendSuccess(res, result);
    } catch (err) {
      response.sendError(res, err);
    }
  });
  app.get(`/${appName}/cardone`, async (req,res) => {
    try {
      const result = await ctrlCardone.cardone(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  app.get(`/${appName}/cardtwo`, async (req,res) => {
    try {
      const result = await ctrlCardtwo.cardtwo(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  app.get(`/${appName}/cardthree`, async (req,res) => {
    try {
      const result = await ctrlCardthree.cardthree(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  app.use(`/${appName}`, auth.authenticate, system);

  // catch 404 and forward to error handler
  app.all("*", (req, res) => {
    response.sendError(res, new createError.NotFound("Not Found."));
  });

  // error handler for all the applications
  app.use((err, req, res) => {
    log.error(err);
    response.sendError(res, new createError.InternalServerError("Internal Server Error."));
  });
};
