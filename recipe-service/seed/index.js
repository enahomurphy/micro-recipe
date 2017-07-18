const winston = require('winston');

require('../server');
console.log(process.env)
/**
 * @class
 */
module.exports = class Seed {
  /**
   * @constructor
   * @param {Object} schema object
   */
  constructor(schema) {
    this.data = [];
    this.schema = schema;
    if (this.generate === undefined && this.schema === null) {
      throw new TypeError('Abstract class implement generate method');
    }
  }

  /**
   * wipes collection
   * @return {void}
   */
  wipe() {
    this.schema.collection.remove();
  }

  /**
   * generates array of data to be 
   * inserted into a collection
   * @param {Integer} number 
   * @return {Object} Object 
   */
  build(number) {
    for (let i = 0; i < number; i += 1) {
      this.data.push(i);
    }
    this.data = this.data.map(() => this.generate());
    return this;
  }

  /**
   * Inserts the data into the collections
   * @return {void}
   */
  run() {
    if (['development', 'test'].includes(process.env.NODE_ENV)) {
      this.schema.insertMany(this.data)
        .then(() => {
          winston.log('info', 'recipe seeding was successful');
          process.exit(0);
        })
        .catch(err => {
          console(err.message);
          process.exit(1);
        });
    } else {
      process.exit(1);
    }
  }
};
