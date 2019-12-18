/* eslint-disable no-console */
const helper          = require("../core/helper");

const { introsDataIssues }           = require("./introsDataIssues");
const   ModelIntros    = require("../modules/system/models/mod_introsDataIssues");

const importUser = async () => {
  try {
    await Promise.all(introsDataIssues.map(async (record) => {
      const newRecord = {
        password:         helper.sha256(record.password),
        valid:            1,
        createdAt:        new Date(),
        updatedAt:        new Date(),
      };
      await  ModelIntros.create({ ...record, ...newRecord });
    }));
  } catch (err) {
    throw err;
  }
};

importUser().then(() => {
  console.log('ok');
  process.exit();
}).catch((err) => {
  console.log('error');
  console.log(err);
  process.exit();
});
