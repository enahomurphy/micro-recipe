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
  static get(id) {
    return this.findById(id);
  }

  /**
   * Gets all data set, handles pagination and 
   * query params
   * @param {int} limit
   * @param {int} page
   * @param {q} q user query 
   * @return {object} returns an object
   */
  static getAll(limit = 10, page = 1, q) {
    const query = q ? { description: new RegExp(q) } : {};
    const skip = limit * (page - 1);

    const result = {};
    return new Promise((resolve, reject) => {
      this.find(query).limit(limit).skip(skip)
        .then(categories => {
          result.data = categories;
          this.count().then(count => {
            result.count = count;
            resolve(result);
          }).catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
  }

  /**
   * @param {int} id
   * @return {object} returns an object
   */
  static delete(id) {
    return this.findByIdAndRemove(id);
  }

  /**
   * @param {int} id
   * @return {object} returns an object
   */
  static updateData(id, details) {
    const options = {
      runValidators: true,
      new: true
    };
    return this.findByIdAndUpdate(id, details, options);
  }
}

CategorySchema.loadClass(Category);

module.exports = mongoose.model('Category', CategorySchema);
