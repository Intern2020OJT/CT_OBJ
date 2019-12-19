
const ModelIntrosIssues = require("../models/mod_introsDataIssues");

exports.CreateIntrosDataDB = async (introsData) => {
  try {
    // log(test)
    await Promise.all(introsData.map(async (record) => {
      await ModelIntrosIssues.create({ ...record });
    }));
  } catch (err) {
    throw err;
  }
};// 往数据库新建文件
exports.UpdateIntrosDataDB = async (introsData) => {
  try {
    // log(test)
    const name = {
      name: introsData[0].name,
    };
    await ModelIntrosIssues.delete(name);
    await Promise.all(introsData.map(async (record) => {
      await ModelIntrosIssues.create({ ...record });
    }));// 直接使用updateBycondition不能达成效果，故使之先删后加间接达成更新
  } catch (err) {
    throw err;
  }
};// 更新
exports.deleteIntrosDataDB = async (introsData) => {
  try {
    // log(test)
    const name = {
      name: introsData[0].name,
    };
    await ModelIntrosIssues.delete(name);
  } catch (err) {
    throw err;
  }
};// 更新
