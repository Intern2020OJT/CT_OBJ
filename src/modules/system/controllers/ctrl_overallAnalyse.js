const log = require("../../../core/logger");
const ModelIntrosIssues = require("../models/mod_introsDataIssues");
// const ModelIntros = require("../models/mod_introsData");

exports.overallAnalyse = async (/* prop */) => {
  log.info("get issues start.");
  try {
    const condition = { name: '2020_Intern_Object' };
    const projection = {};
    const message = await ModelIntrosIssues.getList(condition, projection);
    return message;
  } catch (err) {
    log.info("get issues error.");
    log.error(err);
    throw err;
  }
};
