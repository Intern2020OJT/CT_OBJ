const log         = require("../../../core/logger");
const ModelTest    = require("../models/mod_introsData");

exports.HomegetDBData = async() => {
    log.info("get canalysis start.");
    try {
      const id = {}
      const projection = {}
      const message = await ModelTest.getList(id,projection);    
      return message;
    } catch (err) {
      log.info("get canalysis start.");
      log.error(err);
      throw err;
    }
  };
  exports.HomegetDBDataForCheck = async(addName) => {
    log.info("get canalysis start.");
    try {
      const id = {"name":addName}
      const projection = {}
      const message = await ModelTest.getList(id,projection);    
      var contentNum= message.length;
      return contentNum
    } catch (err) {
      log.info("get canalysis start.");
      log.error(err);
      throw err;
    }
  };// 检测是否有重复
  