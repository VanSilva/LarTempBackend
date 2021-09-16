import LarController from '../app/controllers/LarController';
import logger from '../helpers/logger';

module.exports = (server, routes, prefix = '/lar') => {
  logger.info('Routes - Lar - OK');

  routes.get('/', LarController.index);

  server.use(prefix, routes);
};
