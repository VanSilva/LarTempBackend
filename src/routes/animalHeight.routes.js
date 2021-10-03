import AnimalHeightController from '../app/controllers/AnimalHeightController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/animalHeight') => {
  logger.info('Routes - AnimalHeight - OK');
  routes.use(authorization);
  routes.get('/', AnimalHeightController.getAll);
  routes.post('/create', AnimalHeightController.create);
  routes.put('/update/:id', AnimalHeightController.update);
  routes.delete('/delete/:id', AnimalHeightController.delete);

  server.use(prefix, routes);
};
