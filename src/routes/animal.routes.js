import AnimalController from '../app/controllers/AnimalController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/animal') => {
  logger.info('Routes - Animal - OK');
  routes.use(authorization);
  routes.get('/', AnimalController.getAll);
  routes.get('/:id', AnimalController.get);
  routes.post('/create', AnimalController.create);
  routes.put('/update/:id', AnimalController.update);
  routes.delete('/delete/:id', AnimalController.delete);

  server.use(prefix, routes);
};
