const category = require('./category');
const recipe = require('./recipe');

module.exports = express => {
  const router = express.Router();
  category(router);
  recipe(router);
  return router;
};
