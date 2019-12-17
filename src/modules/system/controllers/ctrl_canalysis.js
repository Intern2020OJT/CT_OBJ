const log         = require("../../../core/logger");
const ModelIntrosIssues = require("../models/mod_introsDataIssues");
const ModelIntros    = require("../models/mod_introsData");
//存数据 
exports.creatcanalysis = async (test) => {
  try {    
    await Promise.all(test.map(async (record) => {
      await ModelIntros.create({...record});
    }));
     } catch (err) {
    throw err;
  }
};
exports.creat = async (test) => {
  try {    
    await Promise.all(test.map(async (record) => {
      await  ModelIntrosIssues.create({...record});
    }));
     } catch (err) {
    throw err;
  }
};
//取数据
exports.canalysisissues = async(prop) => {
  log.info("get canalysis start.");
  try {
    const id = {"name":prop}
    const projection = {}
    const message = await ModelIntrosIssues.getList(id,projection);    
    return message;
  } catch (err) {
    log.info("get canalysis start.");
    log.error(err);
    throw err;
  }
};
exports.canalysis = async(prop) => {
  log.info("get canalysis start.");
  try {
    const id = {"name":prop}
    const projection = {}
    const message = await ModelIntros.getList(id,projection);    
    return message;
  } catch (err) {
    log.info("get canalysis start.");
    log.error(err);
    throw err;
  }
};
exports.canalysisauth = async(prop) => {
  log.info("get canalysis start.");
  try {
    const m = {name:prop}
    const g = {_id: "$user.login" , number:{ $sum: 1}}
    const message = await ModelIntrosIssues.aggregate(m,g);  
    return message;
  } catch (err) {
    log.info("cuowu");
    log.error(err);
    throw err;
  }
};