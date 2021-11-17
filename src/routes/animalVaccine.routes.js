import AnimalVaccineController from '../app/controllers/AnimalVaccineController';
import logger from '../helpers/logger';

const authorization = require('../app/middlewares/authorization');

module.exports = (server, routes, prefix = '/AnimalVaccine') => {
  logger.info('Routes - AnimalVaccine - OK');
  routes.use(authorization);
  routes.get('/', AnimalVaccineController.getAll);
  routes.get('/:id', AnimalVaccineController.get);
  routes.post('/create', AnimalVaccineController.create);
  routes.put('/update/:id', AnimalVaccineController.update);
  routes.delete('/delete/:id', AnimalVaccineController.delete);

  server.use(prefix, routes);
};
