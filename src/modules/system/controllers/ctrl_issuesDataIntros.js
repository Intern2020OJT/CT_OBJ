// const log         = require("../../../core/logger");
const ModelIntrosIssues    = require("../models/mod_introsDataIssues");

exports.CreateIntrosDataDB = async (introsData) => {
  try {
    // log(test)
    await Promise.all(introsData.map(async (record) => {
      await ModelIntrosIssues.create({ ...record });
    }));
  } catch (err) {
    throw err;
  }
};
