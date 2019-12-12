const log = require("../../../../core/logger");
const ModelAnalyseRows = require("../../models/mod_analyseRows");

const inIt = async (item, arrays) => {
  for (var i = 0; i < arrays.length; i++) {
    if (item === arrays[i]) return true;
  }
  return false;
}
const dataCutforLabels = async (analyserows) => {
  const labelses = [];
  for (var i = 1; i < analyserows.length; i++) {
    
    for (var j = 0; j < analyserows[i].labels.length; j++) {
      const flag = await inIt(analyserows[i].labels[j],labelses);
      if(!flag){
        labelses.push(analyserows[i].labels[j])
      }
    }
    
  }
  const data = [];
  for (var i = 0; i < labelses.length; i++) {
    const dataItemOpen = {};
    const dataItemClose = {};
    dataItemOpen.type = labelses[i];
    dataItemOpen.value = 0;
    dataItemOpen.name = labelses[i] + "Open";
    dataItemClose.type = labelses[i];
    dataItemClose.value = 0;
    dataItemClose.name = labelses[i] + "Close";
    for (var j = 1; j < analyserows.length; j++) {
      const flag = await inIt(labelses[i], analyserows[j].labels);
      if (analyserows[j].state === "open" && flag) {
        dataItemOpen.value++;
      }
      else if (analyserows[j].state === "close" && flag) {
        dataItemClose.value++;
      }
      else continue;
    }
    data.push(dataItemOpen);
    data.push(dataItemClose);
  }
  return data;
}

const dataCutforAssignees = async (analyserows) =>{
  const assigneeses = [];
  for (var i = 1; i < analyserows.length; i++) {
    
    for (var j = 0; j < analyserows[i].assignees.length; j++) {
      const flag = await inIt(analyserows[i].assignees[j],assigneeses);
      if(!flag){
        assigneeses.push(analyserows[i].assignees[j])
      }
    }
    
  }
  const data = [];
  for (var i = 0; i < assigneeses.length; i++) {
    const dataItemOpen = {};
    const dataItemClose = {};
    dataItemOpen.type = assigneeses[i];
    dataItemOpen.value = 0;
    dataItemOpen.name = assigneeses[i] + "Open";
    dataItemClose.type = assigneeses[i];
    dataItemClose.value = 0;
    dataItemClose.name = assigneeses[i] + "Close";
    for (var j = 1; j < analyserows.length; j++) {
      const flag = await inIt(assigneeses[i], analyserows[j].assignees);
      if (analyserows[j].state === "open" && flag) {
        dataItemOpen.value++;
      }
      else if (analyserows[j].state === "close" && flag) {
        dataItemClose.value++;
      }
      else continue;
    }
    data.push(dataItemOpen);
    data.push(dataItemClose);
  }
  return data;
}

exports.getLables = async (req) => {
  log.info("get labels");
  try {
    const analyserows = await ModelAnalyseRows.getList({});
    const data = await dataCutforLabels(analyserows);
    res = data;
    return (res);
  }
  catch (err) {
    log.info("getLables err")
    log.err(err)
    throw err
  }
}
exports.getAssignees = async (req) => {
  log.info("get Assignees");
  try {
    const analyserows = await ModelAnalyseRows.getList({});
    const data = await dataCutforAssignees(analyserows);
    res = data;
    return (res);
  }
  catch (err) {
    log.info("getAssignees err")
    log.err(err)
    throw err
  }
}
