const category = require('./category');

module.exports = express => {
  const router = express.Router();
  category(router);
  return router;
};
