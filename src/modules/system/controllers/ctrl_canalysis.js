const log         = require("../../../core/logger");
const ModelTest    = require("../models/mod_canalysis");
// 存数据用的
// exports.creatcanalysis = async () => {
//   try {
//     await Promise.all(test.map(async (record) => {
//       await ModelTest.create({...record});
//     }));
//      } catch (err) {
//     throw err;
//   }
// };
exports.canalysis = async() => {
  log.info("get canalysis start.");
  try {
    //const id = {}
    //const projection ={name:1,issues:1,openissues:1,people:1,watchers:1,_id:0}; 
    const id = {}
    const projection = {_id:0,valid:0,__v:0}
    const message = await ModelTest.getList(id,projection);    
    return message;
  } catch (err) {
    log.info("get canalysis start.");
    log.error(err);
    throw err;
  }
};

 