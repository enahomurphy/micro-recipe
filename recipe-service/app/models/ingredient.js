const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Ingredient name is required'],
    lowercase: true,
    validate: {
      validator(v) {
        return new Promise(resolve => {
          resolve(v && v.length > 2);
        });
      },
      message: 'Ingredient name should be greater than two characters'
    },
  },
  quantity: {
    type: String,
    lowercase: true,
  },
  unit: {
    type: String,
    validate: {
      validator(unit) {
        return new Promise(resolve => {
          if (this.quantity && (unit && unit.length > 0)) {
            return resolve(true);
          }
          resolve(false);
        });
      },
      message: 'Quantity is required if unit is supplied'
    }
  },
  recipeId: {
    type: String,
    required: [true, 'Recipe id is required']
  }
}, {
  timestamps:
    { createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

/**
 * @Class
 */
class Ingredient {
  /**
   * @param {string} id
   * @return {object} returns a user
   */
  getIngredientById(id) {
    return this.findById(id);
  }

  /**
   * @param {int} limit
   * @param {int} page
   * @return {object} returns an object
   */
  getAllIngredients(limit = 10, page) {
    const query = { limit, sort: { createdAt: -1 } };
    if (page) {
      query.page = limit * page;
    }
    return {
      result: this.find(query).fetch(),
      count: this.count()
    };
  }
}
IngredientSchema.loadClass(Ingredient);

module.exports = mongoose.model('Ingredient', IngredientSchema);
