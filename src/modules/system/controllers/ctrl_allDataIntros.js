// const log         = require("../../../core/logger");
const ModelIntros    = require("../models/mod_introsData");

exports.CreateIntrosDataDB = async (introsData) => {
  try {
    // log(test)
    await Promise.all(introsData.map(async (record) => {
      await ModelIntros.create({ ...record });
    }));
  } catch (err) {
    throw err;
  }
};
