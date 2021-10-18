import ReactionController from '../app/controllers/ReactionController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/reaction') => {
  logger.info('Routes - Reaction - OK');
  routes.use(authorization);
  routes.get('/', ReactionController.getAll);
  routes.post('/like', ReactionController.createLike);
  routes.post('/deslike', ReactionController.createDislike);
  routes.get('/post/:id', ReactionController.getReactions);

  server.use(prefix, routes);
};
