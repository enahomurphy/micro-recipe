const Response = require('../common/response');
const model = require('../models/category');

/**
 * @class
 */
class Category extends Response {
  /**
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  getCategory(req, res) {
    model.getCategoryById(res.params.id);
  }
}
