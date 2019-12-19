const log = require("../../../../core/logger");
const ModelIntrosIssues = require("../../../../modules/system/models/mod_introsDataIssues");

const dataDevide = async (analyserows, type) => {
  if (type === 'time') {
    const data = [];
    for (let i = 0; i < analyserows.length; i++) {
      const dataItem = {};
      const createdat = new Date(analyserows[i].created_at);
      const closedat = new Date(analyserows[i].closed_at);
      dataItem.fullName = analyserows[i].title;// month比实际月份少1
      if (dataItem.fullName.length >= 5) {
      // eslint-disable-next-line max-len
        dataItem.shortName = `${dataItem.fullName.substr(0, 5)}...${dataItem.fullName.substr(dataItem.fullName.length - 1, 1)}`;
      } else {
        dataItem.shortName = dataItem.fullName;
      }
      dataItem.time = +((closedat.getTime() - createdat.getTime()) / 3600000).toFixed(2);
      dataItem.htmlurl = analyserows[i].html_url;
      data.push(dataItem);
    }
    return data;
  } else if (type === 'comments') {
    const data = [];
    for (let i = 0; i < analyserows.length; i++) {
      const dataItem = {};
      dataItem.fullName = analyserows[i].title;
      if (dataItem.fullName.length >= 5) {
        // eslint-disable-next-line max-len
        dataItem.shortName = `${dataItem.fullName.substr(0, 5)}...${dataItem.fullName.substr(dataItem.fullName.length - 1, 1)}`;
      } else {
        dataItem.shortName = dataItem.fullName;
      }
      dataItem.comments = analyserows[i].comments;
      dataItem.htmlurl = analyserows[i].html_url;
      data.push(dataItem);
    }
    return data;
  }
};
const dataSort = async (needSort, type) => {
  if (type === 'time') {
    const sortData = needSort.sort((c, b) => { return (c.time < b.time) ? 1 : -1; });
    return sortData;
  } else if (type === 'comments') {
    const sortData = needSort.sort((c, b) => { return (c.comments < b.comments) ? 1 : -1; });
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
  const objName = req.query.objName;
  const start = req.query.start;
  const end = req.query.end;
  try {
    // eslint-disable-next-line max-len
    const analyserows = await ModelIntrosIssues.getList({ state:"closed", name:objName, created_at:{ $lt:end, $gt:start } });
    const devideData = await dataDevide(analyserows, 'time');
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
  const objName = req.query.objName;
  const start = req.query.start;
  const end = req.query.end;
  // eslint-disable-next-line no-console
  console.log(start);
  try {
    const analyserows = await ModelIntrosIssues.getList({ name:objName, created_at:{ $lt:end, $gt:start } });
    const devideData = await dataDevide(analyserows, 'comments');
    const data = await dataSort(devideData, 'comments');
    const res = await dataBeTen(data);
    return (res);
  } catch (err) {
    log.info("getCommentsTopTen err");
    log.err(err);
    throw err;
  }
};
