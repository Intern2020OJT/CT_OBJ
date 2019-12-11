const createError = require("http-errors");
const system      = require("./r_system");
const auth        = require("../middleware/auth");
const config      = require("../../config/app");
const response    = require("../core/response");
const log         = require("../core/logger");
const ctrlUser    = require("../modules/system/controllers/ctrl_user");
const ctrlIssues    = require("../modules/system/controllers/ctrl_issues");
const ctrlClassify = require("../modules/system/controllers/ctrl_classify");
const ctrlEffiency = require("../modules/system/controllers/ctrl_efficiency");
const ctrlTopTen = require("../modules/system/controllers/ctrl_topten");
const ctrlIntrosGit =require("../modules/system/controllers/ctrl_introsgit");

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
  app.get(`/${appName}/openingissues`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlIssues.openingissues(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  //以下由杨欣禹使用
  /***************************************************/
  //Labels分析
  app.get(`/${appName}/getLabels`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlClassify.getLables(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  //Assiginees分析
  app.get(`/${appName}/getAssignees`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlClassify.getAssignees(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  //效率分析
  app.get(`/${appName}/getEfficiency`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlEffiency.getEfficiency(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  //时间top10
  app.get(`/${appName}/getTimeTopTen`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlTopTen.getTimeTopTen(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  //comments top10
  app.get(`/${appName}/getCommentsTopTen`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlTopTen.getTimeTopTen(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  //以上由杨欣禹使用
  /******************************************/
  //zc
  app.get(`/${appName}/introsgit`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlIntrosGit.introsGit(req);//模拟数据库取数据
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 

  //注意位置，若置于最底会报错

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


