const Response = require('../common/response');
const Model = require('../models/category');
const Transformer = require('../common/transformer');
const _ = require('underscore');
/**
 * @class
 */
module.exports = class Category {
  /**
   * Gets category by id
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  static get(req, res) {
    Model.get(req.params.id)
      .then(category => Response.success(res, category))
      .catch(err => Response.serverError(res, 'ServerError', err.message));
  }


  /**
   * Gets all categories
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  static getAll(req, res) {
    const { limit, page, q } = req.query;
    Model.getAll(limit, page, q)
      .then(category => Response.success(res, Transformer.transform(category)))
      .catch(err => Response.serverError(res, 'ServerError', err.message));
  }

  /**
   * Creates a new  category
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  static create(req, res) {
    const category = new Model(req.body);
    category.validate(err => {
      if (err) {
        return Response
          .badRequest(res, 'ValidationError', err);
      }
      category.save()
        .then(data => {
          Response.success(res, data);
        })
        .catch(err => Response.serverError(res, 'ServerError', err.message));
    });
  }

  /**
   * updates a category by id
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  static update(req, res) {
    const id = req.params.id;
    const body = _.pick(req.body, ['title', 'description']);
    Model.updateData(id, body)
      .then(data => {
        Response.success(res, data);
      })
      .catch(err => Response.serverError(res, 'ServerError', err.message));
  }
};
