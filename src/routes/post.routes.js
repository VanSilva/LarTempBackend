import PostController from '../app/controllers/PostController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/post') => {
  logger.info('Routes - Post - OK');
  routes.use(authorization);
  routes.get('/', PostController.getAll);
  routes.post('/create', PostController.create);
  routes.put('/update/:id', PostController.update);
  routes.delete('/delete/:id', PostController.delete);

  server.use(prefix, routes);
};
