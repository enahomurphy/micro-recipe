const mongoose = require('mongoose');

const Model = require('./');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Recipe name is required'],
    lowercase: true,
    validate: {
      validator(v) {
        return new Promise(resolve => {
          resolve(v && v.length > 2);
        });
      },
      message: 'Recipe name should be greater than two characters'
    },
  },
  description: {
    type: String
  },
  instruction: {
    type: String
  },
  photos: {
    type: Array
  },
  userId: {
    type: String,
    required: [true, 'User id is required']
  },
  categoryId: {
    type: String,
    required: [true, 'Category id is required']
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
class Recipe extends Model {
  
}

RecipeSchema.loadClass(Recipe);

module.exports = mongoose.model('Recipe', RecipeSchema);
