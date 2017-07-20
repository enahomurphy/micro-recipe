const faker = require('faker');

const Recipe = require('../app/models/recipe');
const Seed = require('./');

/**
 * @class
 */
module.exports = class RecipeSeed extends Seed {
  /**
   * @constructor
   * @param {Object} schema object
   */
  constructor() {
    super(Recipe);
  }

  /**
   * generates demo data for collection
   * @return {void}
   */
  generate() {
    return {
      name: faker.name.findName(),
      quantity: faker.lorem.paragraph(),
      unit: faker.lorem.paragraphs(),
      recipeId: faker.random.uuid(),
    };
  }
};
