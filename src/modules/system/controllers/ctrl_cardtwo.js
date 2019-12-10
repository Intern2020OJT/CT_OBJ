const log         = require("../../../core/logger");
const ModelUser    = require("../models/mod_user");
exports.cardtwo = async() => {
  log.info("get cardtwo start.");
  try {   
    const id = {$or:[{"name":"Sports"},{"name": "Strategy"},{"name": "Action"},{"name": "Shooter"},{"name": "Other"}]};//模拟导入的项目名称调取数据库数据
    const projection ={name:1,fullName:1,email:1,_id:0};//projection:可选，使用投影操作符指定返回的键。查询时返回文档中所有键值,只需省略该参数即可（默认省略）
    const message = await ModelUser.getList(id, projection);    
    return message;
  } catch (err) {
    log.info("get cardtow error.");
    log.error(err);
    throw err;
  }
};

 