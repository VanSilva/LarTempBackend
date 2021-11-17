import AnimalTypeController from '../app/controllers/AnimalTypeController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/animalType') => {
  logger.info('Routes - AnimalType - OK');
  routes.use(authorization);
  routes.get('/', AnimalTypeController.getAll);
  routes.get('/:id', AnimalTypeController.get);
  routes.post('/create', AnimalTypeController.create);
  routes.put('/update/:id', AnimalTypeController.update);
  routes.delete('/delete/:id', AnimalTypeController.delete);

  server.use(prefix, routes);
};
