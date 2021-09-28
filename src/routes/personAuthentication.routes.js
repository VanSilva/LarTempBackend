import PersonAuthenticationController from '../app/controllers/PersonAuthenticationController';
import logger from '../helpers/logger';

module.exports = (server, routes, prefix = '/login') => {
  logger.info('Routes - PersonAuthentication - OK');

  routes.post('/', PersonAuthenticationController.login);

  server.use(prefix, routes);
};
