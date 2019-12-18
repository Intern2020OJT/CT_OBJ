const log = require("../../../../core/logger");
const ModelAnalyseRows = require("../../models/mod_analyseRows");
// 本文件待编辑,需要时间区间判断

const dataDevide = async (analyserows) => {
  const data = [];
  for (let i = 0; i < analyserows.length; i++) {
    const dataItem = {};
    const createdat = new Date(analyserows[i].createdat);
    const closedat = new Date(analyserows[i].closedat);
    dataItem.day = createdat.getDate();
    dataItem.month = createdat.getMonth();// month比实际月份少1
    dataItem.time = (closedat.getTime() - createdat.getTime()) / 3600000;
    data.push(dataItem);
  }
  return data;
};

const dataAddCol = async (devideData, monthSpace) => {
  if (monthSpace > 3) {
    const colculate = [];
    for (let i = 0; i < 12; i++) {
      const colItem = { time: 0, count: 0 };
      colculate.push(colItem);
    }
    for (let i = 0; i < devideData.length; i++) {
      switch (devideData[i].month) {
        case 0: colculate[0].time += devideData[i].time; colculate[0].count++; break;
        case 1: colculate[1].time += devideData[i].time; colculate[1].count++; break;
        case 2: colculate[2].time += devideData[i].time; colculate[2].count++; break;
        case 3: colculate[3].time += devideData[i].time; colculate[3].count++; break;
        case 4: colculate[4].time += devideData[i].time; colculate[4].count++; break;
        case 5: colculate[5].time += devideData[i].time; colculate[5].count++; break;
        case 6: colculate[6].time += devideData[i].time; colculate[6].count++; break;
        case 7: colculate[7].time += devideData[i].time; colculate[7].count++; break;
        case 8: colculate[8].time += devideData[i].time; colculate[8].count++; break;
        case 9: colculate[9].time += devideData[i].time; colculate[9].count++; break;
        case 10: colculate[10].time += devideData[i].time; colculate[10].count++; break;
        case 11: colculate[11].time += devideData[i].time; colculate[11].count++; break;
        default: break;
      }
    }
    const data = [
      {
        month: 'Jan',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Feb',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Mar',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Apr',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'May',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Jun',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Jul',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Aug',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Sep',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Oct',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Nov',
        item: '平均对应时长',
        time: 0,
      },
      {
        month: 'Dec',
        item: '平均对应时长',
        time: 0,
      },
    ];
    for (let i = 0; i < 12; i++) {
      if (colculate[i].time !== 0) {
        data[i].time = (colculate[i].time / colculate[i].count).toFixed(2);
      }
    }
    return data;
  } else {
    const daydata = [];
    for (let i = 0; i < devideData.length; i++) {
      const daydataItem = {};
      daydataItem.month = `${devideData[i].month + 1}/${devideData[i].day}`;
      daydataItem.item = "平均对应时长";
      daydataItem.time = devideData[i].time;
      daydataItem.count = 1;
      // daydata.push(daydataItem);
      for (let j = i + 1; j < devideData.length; j++) {
        if (devideData[i].month === devideData[j].month && devideData[i].day === devideData[j].day) {
          daydataItem.time += devideData[j].time;
          daydataItem.count++;
        } else {
          i = j - 1; break;
        }
      }
      daydata.push(daydataItem);
    }
    const data = [];
    for (let i = 0; i < daydata.length; i++) {
      const dataItem = {};
      dataItem.month = daydata[i].month;
      dataItem.item = daydata[i].item;
      dataItem.time = (daydata[i].time / daydata[i].count).toFixed(2);
      data.push(dataItem);
    }
    return data;
  }
};


exports.getEfficiency = async (req) => {
  log.info("getEfficiency");
  // eslint-disable-next-line no-console
  console.log(req.query);// 得到客户端传来的参数
  try {
    const analyserows = await ModelAnalyseRows.getList({ state: "close" });
    const devideData = await dataDevide(analyserows);
    // 4这个数字代表月份差
    const data = await dataAddCol(devideData, 4);
    const res = data;
    return (res);
  } catch (err) {
    log.info("getEfficiency err");
    log.err(err);
    throw err;
  }
};
