const log = require("../../../../core/logger");
const ModelIntrosIssues = require("../../../../modules/system/models/mod_introsDataIssues");
const ModelIntros = require("../../../../modules/system/models/mod_introsData");

const inIt = async (item, arrays) => {
  for (let i = 0; i < arrays.length; i++) {
    if (item === arrays[i].name) return true;
  }
  for (let i = 0; i < arrays.length; i++) {
    if (item === arrays[i]) return true;
  }
  for (let i = 0; i < arrays.length; i++) {
    if (item === arrays[i].login) return true;
  }
  return false;
};
const dataCutforLabels = async (analyserows, objName) => {
  const obj = await ModelIntros.getOne({ name:objName });
  const labelses = obj.labels;
  const data = [];
  for (let i = 0; i < labelses.length; i++) {
    const dataItemOpen = {};
    const dataItemClose = {};
    dataItemOpen.type = labelses[i].name;
    dataItemOpen.value = 0;
    dataItemOpen.name = `${labelses[i].name}Open`;
    dataItemClose.type = labelses[i].name;
    dataItemClose.value = 0;
    dataItemClose.name = `${labelses[i].name}Close`;
    for (let j = 1; j < analyserows.length && analyserows[i].pull_request === undefined; j++) {
      // eslint-disable-next-line no-await-in-loop
      const flag = await inIt(labelses[i].name, analyserows[j].labels);
      if (analyserows[j].state === "open" && flag) {
        dataItemOpen.value++;
      } else if (analyserows[j].state === "closed" && flag) {
        dataItemClose.value++;
      } else continue;
    }
    data.push(dataItemOpen);
    data.push(dataItemClose);
  }
  return data;
};

const dataCutforAssignees = async (analyserows) => {
  const assigneeses = [];
  for (let i = 1; i < analyserows.length && analyserows[i].pull_request === undefined; i++) {
    for (let j = 0; j < analyserows[i].assignees.length; j++) {
      // eslint-disable-next-line no-await-in-loop
      const flag = await inIt(analyserows[i].assignees[j].login, assigneeses);
      if (!flag) {
        assigneeses.push(analyserows[i].assignees[j].login);
      }
    }
  }
  const data = [];
  for (let i = 0; i < assigneeses.length; i++) {
    const dataItemOpen = {};
    const dataItemClose = {};
    dataItemOpen.type = assigneeses[i];
    dataItemOpen.value = 0;
    dataItemOpen.name = `${assigneeses[i]}Open`;
    dataItemClose.type = assigneeses[i];
    dataItemClose.value = 0;
    dataItemClose.name = `${assigneeses[i]}Close`;
    for (let j = 1; j < analyserows.length; j++) {
      // eslint-disable-next-line no-await-in-loop
      const flag = await inIt(assigneeses[i], analyserows[j].assignees);
      if (analyserows[j].state === "open" && flag) {
        dataItemOpen.value++;
      } else if (analyserows[j].state === "closed" && flag) {
        dataItemClose.value++;
      } else continue;
    }
    data.push(dataItemOpen);
    data.push(dataItemClose);
  }
  return data;
};

exports.getLabels = async (req) => {
  log.info("get labels");
  // 得到客户端传来的参数
  const objName = req.query.objName;
  const start = req.query.start;
  const end = req.query.end;
  try {
    const analyserows = await ModelIntrosIssues.getList({ name:objName, created_at:{ $lt:end, $gt:start } });
    // eslint-disable-next-line no-console
    // console.log(analyserows);
    const data = await dataCutforLabels(analyserows, objName);
    const res = data;
    return (res);
  } catch (err) {
    log.info("getLables err");
    log.err(err);
    throw err;
  }
};
exports.getAssignees = async (req) => {
  log.info("get Assignees");
  // 得到客户端传来的参数
  const objName = req.query.objName;
  const start = req.query.start;
  const end = req.query.end;
  try {
    const analyserows = await ModelIntrosIssues.getList({ name:objName, created_at:{ $lt:end, $gt:start } });
    // eslint-disable-next-line no-console
    // console.log(analyserows);// 得到客户端传来的参数
    const data = await dataCutforAssignees(analyserows);
    const res = data;
    return (res);
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
