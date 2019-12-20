/* eslint-disable prefer-const */
const ModelTest = require("../models/mod_introsData");
const ModelIntrosIssues = require("../models/mod_introsDataIssues");

exports.HomegetDBData = async () => {
  try {
    const id = {};
    const projection = {};
    const message = await ModelTest.getList(id, projection);
    return message;
  } catch (err) {
    throw err;
  }
};
exports.HomegetDBDataForCheck = async (addName) => {
  try {
    const id = { name: addName };
    const projection = {};
    const message = await ModelTest.getList(id, projection);
    const message2 = await ModelIntrosIssues.getList(id, projection);
    let contentNum = {
      programNum: message,
      issuesNum: message2,
    };
    return contentNum;
  } catch (err) {
    throw err;
  }
};// 检测是否有重复
