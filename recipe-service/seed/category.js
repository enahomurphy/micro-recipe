const faker = require('faker');

const Category = require('../app/models/recipe');
const Seed = require('./');

/**
 * @class
 */
class CategorySeed extends Seed {
  /**
   * @constructor
   * @param {Object} schema object
   */

  /**
   * generates demo data for collection
   * @return {void}
   */
  generate() {
    return {
      title: faker.name.findName(),
      description: faker.lorem.paragraph()
    };
  }
}
