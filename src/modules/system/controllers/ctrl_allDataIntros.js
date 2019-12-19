const ModelIntros = require("../models/mod_introsData");

exports.CreateIntrosDataDB = async (introsData) => {
  try {
    await Promise.all(introsData.map(async (record) => {
      await ModelIntros.create({ ...record });
    }));
  } catch (err) {
    throw err;
  }
};// 插入
exports.UpdateIntrosDataDB = async (introsData) => {
  try {
    const name = {
      name: introsData[0].name,
    };
    await Promise.all(introsData.map(async (record) => {
      await ModelIntros.updateByCondition(name, { ...record }, { multi: true, upsert:true });
    }));
  } catch (err) {
    throw err;
  }
};// 更新
exports.deleteIntrosDataDB = async (introsData) => {
  try {
    const name = {
      name: introsData[0].name,
    };
    await ModelIntros.delete(name);
  } catch (err) {
    throw err;
  }
};// 删除
