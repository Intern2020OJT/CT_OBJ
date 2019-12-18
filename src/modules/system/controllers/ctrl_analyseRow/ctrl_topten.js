const log = require("../../../../core/logger");
const ModelIntrosIssues = require("../../../../modules/system/models/mod_introsDataIssues");

const dataDevide = async (analyserows) => {
  const data = [];
  for (let i = 0; i < analyserows.length; i++) {
    const dataItem = {};
    const createdat = new Date(analyserows[i].created_at);
    const closedat = new Date(analyserows[i].closed_at);
    dataItem.fullName = analyserows[i].title;// month比实际月份少1
    if (dataItem.fullName.length >= 5) {
      // eslint-disable-next-line max-len
      dataItem.shortName = `${dataItem.fullName.substr(0, 5)}...`;
    } else {
      dataItem.shortName = dataItem.fullName;
    }
    dataItem.time = +((closedat.getTime() - createdat.getTime()) / 3600000).toFixed(2);
    dataItem.comments = analyserows[i].comments;
    dataItem.htmlurl = analyserows[i].html_url;
    data.push(dataItem);
  }
  return data;
};
const dataSort = async (needSort, type) => {
  if (type === 'time') {
    const sortData = needSort.sort((c, b) => { return (c.time > b.time) ? 1 : -1; });
    return sortData;
  } else if (type === 'comments') {
    const sortData = needSort.sort((c, b) => { return (c.comments > b.comments) ? 1 : -1; });
    return sortData;
  }
};
const dataBeTen = async (data) => {
  if (data.length > 10) {
    const beten = [];
    for (let i = 0; i < data.length && i < 10; i++) {
      beten.push(data[i]);
    }
    return beten;
  } else return data;
};

exports.getTimeTopTen = async (req) => {
  log.info("getTimeTopTen");
  // 得到客户端传来的参数
  const objName = req.query.objName.substr(23, req.query.objName.length - 26);
  try {
    const analyserows = await ModelIntrosIssues.getList({ name:objName, state: "closed" });
    const devideData = await dataDevide(analyserows);
    const data = await dataSort(devideData, 'time');
    const res = await dataBeTen(data);
    return (res);
  } catch (err) {
    log.info("getTimeTopTen err");
    log.err(err);
    throw err;
  }
};
exports.getCommentsTopTen = async (req) => {
  log.info("getCommentsTopTen");
  // 得到客户端传来的参数
  const objName = req.query.objName.substr(23, req.query.objName.length - 26);
  try {
    const analyserows = await ModelIntrosIssues.getList({ name:objName, state: "closed" });
    const devideData = await dataDevide(analyserows);
    const data = await dataSort(devideData, 'comments');
    const res = await dataBeTen(data);
    return (res);
  } catch (err) {
    log.info("getCommentsTopTen err");
    log.err(err);
    throw err;
  }
};
