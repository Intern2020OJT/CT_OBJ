const createError = require("http-errors");
const system      = require("./r_system");
const auth        = require("../middleware/auth");
const config      = require("../../config/app");
const response    = require("../core/response");
const log         = require("../core/logger");
const ctrlUser    = require("../modules/system/controllers/ctrl_user");
const ctrlCanalysis = require("../modules/system/controllers/ctrl_canalysis");
const ctrlClassify = require("../modules/system/controllers/ctrl_classify");
const ctrlEffiency = require("../modules/system/controllers/ctrl_efficiency");
const ctrlTopTen = require("../modules/system/controllers/ctrl_topten");
const ctrlIntrosGit =require("../modules/system/controllers/ctrl_introsgit");
const ctrlIntrosGitS =require("../modules/system/controllers/ctrl_introsgitS");


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
      const result = await ctrlIntrosGit.introsGit(req);
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  app.get(`/${appName}/introsgits`, async (req,res) => {
    try {
      // console.log(1)
      const result = await ctrlIntrosGitS.introsGits(req);
      response.sendSuccess(res, result);//返回数据
    } catch (err) {
      response.sendError(res,err);
    }
  }); 
  //sxl
  app.get(`/${appName}/cardone`, async (req, res) => {
    try {
      const result = await ctrlCanalysis.canalysis(req);
      const data = []
      for (var i = 0; i < result.length; i++) {   
           
        for (var d = 0; d < result[i].issues.length; d++) {
          if (result[i].issues[d].state == "close") {
            datestart =new Date(result[i].issues[d].create_at).getTime()
            dateclose =new Date(result[i].issues[d].close_at).getTime()
            date = (dateclose - datestart) / 3600000
            
            time = date / result[i].issues.length   
          }
        }
        
        var data1 = { "name": result[i].name, "time": time }
        data.push(data1)
         
      }
      
      response.sendSuccess(res, data);
    } catch (err) {
      response.sendError(res, err);
    }
  });
  app.get(`/${appName}/cardtwo`, async (req, res) => {
    try {
      const result = await ctrlCanalysis.canalysis(req);
      const data1 = {}
      const data2 = {}
      const data = []
      
      for (let i = 0; i < result.length; i++) {
        data1[result[i].name] = result[i].openissues;
        data2[result[i].name] = result[i].issues.length;
      }
      data1['name'] = 'openissues'
      data2['name'] = 'allissues'
      data.push(data1)
      data.push(data2)
      
      response.sendSuccess(res, data);
    } catch (err) {
      response.sendError(res, err);
    }
  });
  app.get(`/${appName}/cardthree`, async (req, res) => {
    try {
      const result = await ctrlCanalysis.canalysis(req);
      var data = []
      for (let i = 0; i < result.length; i++) {
        const odata = { "name": result[i].name, "people": result[i].people }
        data.push(odata)
      }
      response.sendSuccess(res, data);
    } catch (err) {
      response.sendError(res, err);
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


