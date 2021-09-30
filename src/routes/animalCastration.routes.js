import AnimalCastrationController from '../app/controllers/AnimalCastrationController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/animalCastration') => {
  logger.info('Routes - AnimalCastration - OK');
  routes.use(authorization);
  routes.get('/', AnimalCastrationController.getAll);
  routes.post('/create', AnimalCastrationController.create);
  routes.put('/update/:id', AnimalCastrationController.update);
  routes.delete('/delete/:id', AnimalCastrationController.delete);

  server.use(prefix, routes);
};
