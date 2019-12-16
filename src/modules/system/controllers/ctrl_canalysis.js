const log         = require("../../../core/logger");
const ModelTest    = require("../models/mod_canalysis");
const ModelIntros    = require("../models/mod_introsData");
exports.creatcanalysis = async (test) => {
  try {
    //log(test)
    await Promise.all(test.map(async (record) => {

      await ModelTest.create({...record});
    }));
     } catch (err) {
    throw err;
  }
};
exports.canalysis = async() => {
  log.info("get canalysis start.");
  try {
    const id = {}
    const projection = {}
    const message = await ModelIntros.getList(id,projection);    
    return message;
  } catch (err) {
    log.info("get canalysis start.");
    log.error(err);
    throw err;
  }
};

 