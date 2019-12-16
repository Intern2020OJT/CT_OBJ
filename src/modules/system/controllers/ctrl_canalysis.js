const log         = require("../../../core/logger");
const ModelTest    = require("../models/mod_canalysis");
const ModelIntros    = require("../models/mod_introsData");
//存数据 
exports.creatcanalysis = async (test) => {
  try {    
    await Promise.all(test.map(async (record) => {
      await ModelTest.create({...record});
    }));
     } catch (err) {
    throw err;
  }
};
//取数据
exports.canalysis = async(prop) => {
  log.info("get canalysis start.");
  try {
    const id = {"name":prop}
    const projection = {}
    const message = await ModelIntros.getList(id,projection);    
    return message;
  } catch (err) {
    log.info("get canalysis start.");
    log.error(err);
    throw err;
  }
};

 