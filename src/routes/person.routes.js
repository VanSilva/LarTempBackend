import PersonController from '../app/controllers/PersonController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/person') => {
  logger.info('Routes - Person - OK');
  routes.post('/create', PersonController.create);
  routes.use(authorization);
  routes.get('/', PersonController.getAll);
  routes.put('/update/:id', PersonController.update);
  routes.delete('/delete/:id', PersonController.delete);

  server.use(prefix, routes);
};
