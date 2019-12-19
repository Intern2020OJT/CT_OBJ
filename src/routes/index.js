/* eslint-disable no-await-in-loop */
const createError = require("http-errors");
const system = require("./r_system");
const auth = require("../middleware/auth");
const config = require("../../config/app");
const response = require("../core/response");
const log = require("../core/logger");
const ctrlUser = require("../modules/system/controllers/ctrl_user");
const ctrlCanalysis = require("../modules/system/controllers/ctrl_canalysis");
const ctrlClassify = require("../modules/system/controllers/ctrl_analyseRow/ctrl_classify");
const ctrlEffiency = require("../modules/system/controllers/ctrl_analyseRow/ctrl_efficiency");
const ctrlTopTen = require("../modules/system/controllers/ctrl_analyseRow/ctrl_topten");

const ctrlOverallAnalyse = require("../modules/system/controllers/ctrl_overallAnalyse");
const ctrlHomegetDBData = require("../modules/system/controllers/ctrl_HomegetDBData");
const ctrlIntrosGitS = require("../modules/system/controllers/ctrl_introsgitS");

const appName = config.name;

module.exports = (app) => {
  app.post(`/${appName}/login`, async (req, res) => {
    try {
      const result = await ctrlUser.simpleLogin(req);
      response.sendSuccess(res, result);
    } catch (err) {
      response.sendError(res, err);
    }
  });
  /** *************************************** */
  // 以下由李海庭使用
  app.get(`/${appName}/projectName`, async (req, res) => {
    try {
      console.log(req.query);
      response.sendSuccess(res);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  app.get(`/${appName}/overallAnalyse`, async (req, res) => {
    try {
      const result = await ctrlOverallAnalyse.overallAnalyse(req);// 数据库取数据
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // 以上由李海庭使用
  /** *************************************** */

  // 以下由杨欣禹使用
  /** ************************************************ */
  // Labels分析
  app.get(`/${appName}/getLabels`, async (req, res) => {
    try {
      // console.log(1)
      const result = await ctrlClassify.getLabels(req);// 模拟数据库取数据
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // Assiginees分析
  app.get(`/${appName}/getAssignees`, async (req, res) => {
    try {
      // console.log(1)
      const result = await ctrlClassify.getAssignees(req);// 模拟数据库取数据
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // 效率分析
  app.get(`/${appName}/getEfficiency`, async (req, res) => {
    try {
      // console.log(1)
      const result = await ctrlEffiency.getEfficiency(req);// 模拟数据库取数据
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // 时间top10
  app.get(`/${appName}/getTimeTopTen`, async (req, res) => {
    try {
      // console.log(1)
      const result = await ctrlTopTen.getTimeTopTen(req);// 模拟数据库取数据
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // comments top10
  app.get(`/${appName}/getCommentsTopTen`, async (req, res) => {
    try {
      // console.log(1)
      const result = await ctrlTopTen.getCommentsTopTen(req);// 模拟数据库取数据
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // 以上由杨欣禹使用
  /** *************************************** */
  // zc
  app.get(`/${appName}/HomegetDBData`, async (req, res) => {
    try {
      // console.log(1)
      const result = await ctrlHomegetDBData.HomegetDBData(req);
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  app.get(`/${appName}/introsgits`, async (req, res) => {
    try {
      // console.log(1)
      const result = await ctrlIntrosGitS.introsGits(req);
      response.sendSuccess(res, result);// 返回数据
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // sxl
  app.get(`/${appName}/cardone`, async (req, res) => {
    try {
      const data = [];
      const serverdata = [];
      const clientdata = req.query.res;
      // eslint-disable-next-line no-empty
      for (let a = 0; a < clientdata.length; a++) {
        const serverobj = JSON.parse(clientdata[a]);
        serverdata.push(serverobj);
      }
      for (let d = 0; d < serverdata.length; d++) {
        const result = await ctrlCanalysis.canalysisissues(serverdata[d].name);
        let Tdate = 0;
        let timedate = 0;
        for (let i = 0; i < result.length; i++) {
          if (result[i].state === "close") {
            const datestart = new Date(result[i].created_at).getTime();
            const dateclose = new Date(result[i].closed_at).getTime();
            const date = (dateclose - datestart) / 3600000;
            Tdate += date;
            timedate += 1;
          }
        }
        const time = Tdate / timedate;
        const data1 = { name: result[0].name, time };
        data.push(data1);
        log.info(1);
      }
      response.sendSuccess(res, data);
    } catch (err) {
      response.sendError(res, err);
    }
  });
  app.get(`/${appName}/cardtwo`, async (req, res) => {
    try {
      const serverdata = [];
      const clientdata = req.query.res;
      // eslint-disable-next-line no-empty
      for (let a = 0; a < clientdata.length; a++) {
        const serverobj = JSON.parse(clientdata[a]);
        serverdata.push(serverobj);
      }
      const data1 = {};
      const data2 = {};
      const data = [];
      for (let d = 0; d < serverdata.length; d++) {
        const resultissues = await ctrlCanalysis.canalysisissues(serverdata[d].name);
        const result = await ctrlCanalysis.canalysis(serverdata[d].name);
        for (let i = 0; i < result.length; i++) {
          log.info(result.length);
          data1[result[i].name] = result[i].open_issues_count;// 开的issues
          data2[resultissues[0].name] = resultissues.length;// 所有的issues
          data1.name = 'openissues';
          data2.name = 'allissues';
          log.info(data1);
          data.push(data1);
          data.push(data2);
        }
      }
      response.sendSuccess(res, data);
    } catch (err) {
      response.sendError(res, err);
    }
  });
  app.get(`/${appName}/cardthree`, async (req, res) => {
    try {
      const data = [];
      const serverdata = [];
      const clientdata = req.query.res;
      // eslint-disable-next-line no-empty
      for (let a = 0; a < clientdata.length; a++) {
        const serverobj = JSON.parse(clientdata[a]);
        serverdata.push(serverobj);
      }
      for (let d = 0; d < serverdata.length; d++) {
        let result = {};
        const ndata = {};
        result = await ctrlCanalysis.canalysisauth(serverdata[d].name);
        ndata.name = serverdata[d].name;
        ndata.people = result.length;
        data.push(ndata);
      }

      response.sendSuccess(res, data);
    } catch (err) {
      response.sendError(res, err);
    }
  });
  // 注意位置，若置于最底会报错
  app.use(`/${appName}`, auth.authenticate, system);

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
