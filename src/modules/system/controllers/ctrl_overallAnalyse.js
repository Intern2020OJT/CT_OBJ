const log = require("../../../core/logger");
const ModelIntrosIssues = require("../models/mod_introsDataIssues");
const ModelIntros = require("../models/mod_introsData");

exports.overallAnalyse = async (req) => {
  log.info("get issues start.");
  try {
    const overallDatas = {};
    const condition = { name: req.query.prjName }; 
    const projection = {};
    const project = await ModelIntros.getList(condition, projection); // 项目
    const issues = await ModelIntrosIssues.getList(condition, projection); // 项目的issues
    overallDatas.total = issues.length; // issue总数
    overallDatas.opening = project[0].open_issues_count;  // open的issue数
    let totalTime = 0;
    for (let i = 0; i < issues.length; i++) {
      if (issues[i].state === "closed") {
        const closedAt = new Date(issues[i].closed_at);
        const createdAt = new Date(issues[i].created_at);
        totalTime += closedAt.getTime() - createdAt.getTime();
      }
    }
    overallDatas.averageTime = totalTime / overallDatas.total / 36000000; // issue平均对应时长
    overallDatas.retentionRate = (overallDatas.opening / overallDatas.total) * 100; // 滞留率
    return overallDatas;
  } catch (err) {
    log.info("get issues error.");
    log.error(err);
    throw err;
  }
};
