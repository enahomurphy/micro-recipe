const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: [true, 'Category title is required'],
    lowercase: true,
    validate: {
      validator(v) {
        return new Promise(resolve => {
          resolve(v && v.length > 2);
        });
      },
      message: 'Category title should be greater than two characters'
    },
    unique: true
  },
  description: {
    type: String
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
class Category {
  /**
   * @param {string} id
   * @return {object} returns a user
   */
  static getCategoryById(id) {
    return this.findById(id);
  }

  /**
   * @param {int} limit
   * @param {int} page
   * @return {object} returns an object
   */
  static getAllCategories(limit = 10, page) {
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
CategorySchema.loadClass(Category);

module.exports = mongoose.model('Category', CategorySchema);
