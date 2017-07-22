const Response = require('../common/response');
const Transformer = require('../common/transformer');
const _ = require('underscore');
/**
 * @class
 */
module.exports = class Controller {
  /**
   * @constructor
   * @param {schema} schema 
   */
  constructor(schema) {
    this.schema = schema;
    this.updatable = [];
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }

  /**
   * Set resource field that's updatable
   * @param {Array} array 
   * @return {Object} returns this
   */
  setUpdatable(array) {
    this.updatable = array;
    return this;
  }

  /**
   * Gets resource by id
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  get(req, res) {
    this.schema.get(req.params.id)
      .then(data => Response.success(res, data))
      .catch(err => Response.serverError(res, 'ServerError', err.message));
  }


  /**
   * Gets all resource
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  getAll(req, res) {
    const { limit, page, q } = req.query;
    this.schema.getAll(limit, page, q)
      .then(data => Response.success(res, Transformer.transform(data)))
      .catch(err => Response.serverError(res, 'ServerError', err.message));
  }

  /**
   * Creates a new  resource
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  create(req, res) {
    const instance = new this.schema(req.body);
    instance.validate(err => {
      if (err) {
        return Response
          .badRequest(res, 'ValidationError', err);
      }
      instance.save()
        .then(data => {
          Response.success(res, data);
        })
        .catch(err => Response.serverError(res, 'ServerError', err.message));
    });
  }

  /**
   * updates a resource  by id
   * @param  {Object} req - request object
   * @param  {Object} res - response object
   * @return {Objects} returns a response
   */
  update(req, res) {
    const id = req.params.id;
    const { updatable } = this.setUpdatable();
    const body = _.pick(req.body, updatable);
    this.schema.updateData(id, body)
      .then(data => {
        Response.success(res, data);
      })
      .catch(err => Response.serverError(res, 'ServerError', err.message));
  }
};
