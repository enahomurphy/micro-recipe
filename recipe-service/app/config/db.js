const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = config => {
  if (!config.dbUrl) {
    throw new Error('Connection error, Database url not found');
  }
  return mongoose.connect(config.dbUrl, { useMongoClient: true });
};
