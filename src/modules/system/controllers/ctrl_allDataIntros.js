const log = require("../../../core/logger");
const ModelIntros = require("../models/mod_introsData");
exports.CreateIntrosDataDB = async (introsData) => {
  try {
    //log(test)
    await Promise.all(introsData.map(async (record) => {
      await ModelIntros.create({ ...record });
    }));
  } catch (err) {
    throw err;
  }
};//插入
exports.UpdateIntrosDataDB = async (introsData) => {
  try {
    //log(test)
    var midName = introsData[0].name;
    var name = {
      name: introsData[0].name
    }
    await Promise.all(introsData.map(async (record) => {
      await ModelIntros.updateByCondition(name, { ...record })
    }));
  } catch (err) {
    throw err;
  }
};//更新