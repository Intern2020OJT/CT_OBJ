const log = require("../../../../core/logger");
const ModelAnalyseRows = require("../../models/mod_analyseRows");

const inIt = async (item, arrays) => {
  for (let i = 0; i < arrays.length; i++) {
    if (item === arrays[i]) return true;
  }
  return false;
};
const dataCutforLabels = async (analyserows) => {
  const labelses = [];
  for (let i = 1; i < analyserows.length; i++) {
    for (let j = 0; j < analyserows[i].labels.length; j++) {
      // eslint-disable-next-line no-await-in-loop
      const flag = await inIt(analyserows[i].labels[j], labelses);
      if (!flag) {
        labelses.push(analyserows[i].labels[j]);
      }
    }
  }
  const data = [];
  for (let i = 0; i < labelses.length; i++) {
    const dataItemOpen = {};
    const dataItemClose = {};
    dataItemOpen.type = labelses[i];
    dataItemOpen.value = 0;
    dataItemOpen.name = `${labelses[i]}Open`;
    dataItemClose.type = labelses[i];
    dataItemClose.value = 0;
    dataItemClose.name = `${labelses[i]}Close`;
    for (let j = 1; j < analyserows.length; j++) {
      // eslint-disable-next-line no-await-in-loop
      const flag = await inIt(labelses[i], analyserows[j].labels);
      if (analyserows[j].state === "open" && flag) {
        dataItemOpen.value++;
      } else if (analyserows[j].state === "close" && flag) {
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
  for (let i = 1; i < analyserows.length; i++) {
    for (let j = 0; j < analyserows[i].assignees.length; j++) {
      // eslint-disable-next-line no-await-in-loop
      const flag = await inIt(analyserows[i].assignees[j], assigneeses);
      if (!flag) {
        assigneeses.push(analyserows[i].assignees[j]);
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
      } else if (analyserows[j].state === "close" && flag) {
        dataItemClose.value++;
      } else continue;
    }
    data.push(dataItemOpen);
    data.push(dataItemClose);
  }
  return data;
};

exports.getLables = async (req) => {
  log.info("get labels");
  // eslint-disable-next-line no-console
  console.log(req.query);// 得到客户端传来的参数
  try {
    const analyserows = await ModelAnalyseRows.getList({});
    const data = await dataCutforLabels(analyserows);
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
  // eslint-disable-next-line no-console
  console.log(req.query);// 得到客户端传来的参数
  try {
    const analyserows = await ModelAnalyseRows.getList({});
    const data = await dataCutforAssignees(analyserows);
    const res = data;
    return (res);
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
