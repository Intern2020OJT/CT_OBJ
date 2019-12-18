const log         = require("../../../core/logger");
const ModelTest    = require("../models/mod_introsData");

exports.HomegetDBData = async () => {
  log.info("get canalysis start.");
  try {
    const id = {};
    const projection = { _id:0, valid:0, __v:0 };
    const message = await ModelTest.getList(id, projection);
    return message;
  } catch (err) {
    log.info("get canalysis start.");
    log.error(err);
    throw err;
  }
};
