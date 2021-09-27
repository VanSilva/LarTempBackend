import CityController from '../app/controllers/CityController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/city') => {
  logger.info('Routes - City - OK');
  routes.use(authorization);
  routes.get('/', CityController.getAll);
  routes.post('/create', CityController.create);
  routes.put('/update/:id', CityController.update);
  routes.delete('/delete/:id', CityController.delete);

  server.use(prefix, routes);
};
