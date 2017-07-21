
module.exports = class Model {
  /**
   * @constructor
   */
  constructor() {
    this.query = {};
  }

  /**
   * Handles single object query
   * @param {String} id
   * @return {Promise} returns a single model
   */
  static get(id) {
    return this.findById(id);
  }

  /**
   * Builds query for getting all data
   * @param {String} search
   * @return {Object} returns a single model
   */
  static buildQuery(search) {
    this.query = search ? {
      name: new RegExp(search),
    } : {};
    return this;
  }

  /**
   * Gets all set, handles pagination and 
   * query params
   * @param {int} limit
   * @param {int} page
   * @param {string} search string to match
   * @param {Object} where specific data to get
   * @return {Promise} returns an array object
   */
  static getAll(limit = 10, page = 1, search, where = {}) {
    const skip = limit * (page - 1);
    const result = {};
    return new Promise((resolve, reject) => {
      this.buildQuery(search)
        .where(where).find(this.query).limit(limit)
        .skip(skip)
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
   * deletes an object 
   * @param {int} id
   * @return {Promise} returns an object
   */
  static delete(id) {
    return this.findByIdAndRemove(id);
  }

  /**
   * Handles model update
   * @param {int} id
   * @param {object} details
   * @return {Promise} returns an object
   */
  static updateData(id, details) {
    const options = {
      runValidators: true,
      new: true
    };
    return this.findByIdAndUpdate(id, details, options);
  }
};
