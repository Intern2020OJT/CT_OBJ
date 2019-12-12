const log = require("../../../../core/logger");
const ModelAnalyseRows = require("../../models/mod_analyseRows");

const dataDevide = async (analyserows) => {
  const data = [];
  for (var i = 0; i < analyserows.length; i++) {
    const dataItem = {};
    const createdat = new Date(analyserows[i].createdat);
    const closedat = new Date(analyserows[i].closedat);
    dataItem.fullName = analyserows[i].title;//month比实际月份少1
    if (dataItem.fullName.length >= 5) {
      dataItem.shortName = dataItem.fullName.substr(0, 2) + "..."+dataItem.fullName.substr(dataItem.fullName.length-2, 2);
    }
    else {
      dataItem.shortName = dataItem.fullName
    }
    dataItem.time = +((closedat.getTime() - createdat.getTime()) / 3600000).toFixed(2);
    dataItem.comments = analyserows[i].comments;
    data.push(dataItem);
  }
  return data;
}
const dataSort = async (needSort, type) => {
  if (type === 'time') {
    const sortData = needSort.sort((c, b) => { return (c.time > b.time) ? 1 : -1; });
    return sortData;
  }
  else if (type === 'comments') {
    const sortData = needSort.sort((c, b) => { return (c.comments > b.comments) ? 1 : -1; });
    return sortData;
  }
}
const dataBeTen = async (data) =>{
  if(data.length>10){
    const beten =[];
    for(var i=0;i<data.length&&i<10;i++){
      beten.push(data[i]);
    }
    return beten;
  }
  else return data;
}

exports.getTimeTopTen = async (req) => {
  log.info("getTimeTopTen");
  console.log(req.query);//得到客户端传来的参数

  try {
    const analyserows = await ModelAnalyseRows.getList({ state: "close" });
    const devideData = await dataDevide(analyserows);
    const data = await dataSort(devideData, 'time');
    res = await dataBeTen(data);
    return (res);
  }
  catch (err) {
    log.info("getTimeTopTen err")
    log.err(err)
    throw err
  }
}
exports.getCommentsTopTen = async (req) => {
  log.info("getCommentsTopTen");
  try {
    const analyserows = await ModelAnalyseRows.getList({ state: "close" });
    const devideData = await dataDevide(analyserows);
    const data = await dataSort(devideData, 'comments');
    res = await dataBeTen(data);
    return (res);
  }
  catch (err) {
    log.info("getCommentsTopTen err")
    log.err(err)
    throw err
  }
}
