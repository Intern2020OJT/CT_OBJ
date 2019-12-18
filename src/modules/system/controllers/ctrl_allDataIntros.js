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
};
exports.UpdateIntrosDataDB = async (introsData) => {
  try {
    //log(test)
    var midName = introsData[0].name;
    var name={
      name:introsData[0].name
    }
    await Promise.all(introsData.map(async (record) => {
      await ModelIntros.remove(name, function (err) {
        if (err) return handleError(err);
        console.log('The raw response from Mongo was ', raw);
      });
    }))
   /* await Promise.all(introsData.map(async (record) => {
      await ModelIntros.update({ name: midName }, { size: 1634 }, { multi: true }, function (err, raw) {
        if (err) return handleError(err);
        console.log('The raw response from Mongo was ', raw);
      });
    }));*/
  } catch (err) {
    throw err;
  }
};