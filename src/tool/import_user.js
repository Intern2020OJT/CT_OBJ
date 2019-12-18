/* eslint-disable no-console */
const helper          = require("../core/helper");

const { users }           = require("./user");
const ModelUser       = require("../modules/system/models/mod_user");

const importUser = async () => {
  try {
    await Promise.all(users.map(async (record) => {
      const newRecord = {
        password:         helper.sha256(record.password),
        valid:            1,
        createdAt:        new Date(),
        updatedAt:        new Date(),
      };
      await ModelUser.create({ ...record, ...newRecord });
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
