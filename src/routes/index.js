const createError = require("http-errors");
const system = require("./r_system");
const auth = require("../middleware/auth");
const config = require("../../config/app");
const response = require("../core/response");
const log = require("../core/logger");
const ctrlUser = require("../modules/system/controllers/ctrl_user");
const ctrlCanalysis = require("../modules/system/controllers/ctrl_canalysis");

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
