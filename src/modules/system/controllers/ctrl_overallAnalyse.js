const log = require("../../../core/logger");
const ModelIntrosIssues = require("../models/mod_introsDataIssues");

exports.overallAnalyse = async (req) => {
  log.info("get issues start.");
  try {
    const overallDatas = {};
    const condition = { name: req.query.prjName }; // 项目名
    const projection = {};
    const issues = await ModelIntrosIssues.getList(condition, projection); // 项目的issues
    let totalTime = 0;
    let total = 0;
    let opening = 0;
    for (let i = 0; i < issues.length; i++) {
      if (issues[i].pull_request === undefined) {
        total++;
        if (issues[i].state === "closed") {
          const closedAt = new Date(issues[i].closed_at);
          const createdAt = new Date(issues[i].created_at);
          totalTime += closedAt.getTime() - createdAt.getTime();
        } else {
          opening++;
        }
      }
    }
    overallDatas.total = total; // issue总数
    overallDatas.opening = opening;  // open的issue数
    overallDatas.averageTime = totalTime / overallDatas.total / 36000000; // issue平均对应时长
    overallDatas.retentionRate = (overallDatas.opening / overallDatas.total) * 100; // 滞留率
    return overallDatas;
  } catch (err) {
    log.info("get issues error.");
    log.error(err);
    throw err;
  }
};
