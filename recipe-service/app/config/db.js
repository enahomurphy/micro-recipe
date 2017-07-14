const mongoose = require('mongoose');
const winston = require('winston')

mongoose.Promise = global.Promise;

module.exports = (config) => {
  if (!config.dbUrl ) {
    throw new Error('Connection error, Database url not found');
  }
  return mongoose.connect(config.dbUrl,  { useMongoClient: true })
    
  //   () => {
  //   winston.log('info', 'Database connection successful');
  // });

  // const db = mongoose.connection;
  // db.on('error', (err) => {
  //   throw new Error(`Connection error ${err.message}`);
  // });
}