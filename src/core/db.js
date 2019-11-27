const mongoose = require("mongoose");

const log      = require("./logger");
const config   = require("../../config/db");

mongoose.Promise = global.Promise;
const connections = {};

exports.createConnection = (code) => {
  if (!connections[code]) {
    log.warn("Create a connection.");
    const dbURL = exports.getDBURL(code);

    connections[code] = mongoose.createConnection(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  return connections[code];
};

exports.getDBURL = (db) => {
  const { host, port, user, pass, dbName } = config.connections[db];
  let url = null;

  log.warn(`Database Info: ${host} ${port} ${dbName}`);

  if (user) {
    url = `mongodb://${user}:${pass}@${host}:${port}/${dbName}`;
  } else {
    url = `mongodb://${host}:${port}/${dbName}`;
  }
  return url;
};
