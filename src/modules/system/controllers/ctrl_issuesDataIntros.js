const log         = require("../../../core/logger");
const ModelIntrosIssues    = require("../models/mod_introsDataIssues");
exports.CreateIntrosDataDB = async (introsData) => {
  try {
    //log(test)
    await Promise.all(introsData.map(async (record) => {
      await ModelIntrosIssues.create({...record});
    }));
     } catch (err) {
    throw err;
  }
};// 往数据库新建文件
exports.UpdateIntrosDataDB = async (introsData) => {
  try {
    //log(test)
    var midName = introsData[0].name;
    var name={
      name:introsData[0].name
    }
    await Promise.all(introsData.map(async (record) => {
      await ModelIntrosIssues.updateByCondition(name, {...record})}));
  } catch (err) {
    throw err;
  }
};//更新
