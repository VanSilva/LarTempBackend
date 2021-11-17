import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import CityRepository from '../../repository/city.repository';

class CityController {
  async get(req, res) {
    logger.info('CityRepository - Show - OK');

    const { id } = req.params;

    const city = await CityRepository.getCity(id);

    return res.status(httpCodes.OK).send(city);
  }

  async getAll(req, res) {
    logger.info('CityController - Index - OK');

    const city = await CityRepository.getAll();

    return res.status(httpCodes.OK).send(city);
  }

  async create(req, res) {
    logger.info('CityController - Create - OK');

    const { name } = req.body;

    if (await CityRepository.getCityName(name)) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'City already exists' });
    }

    const city = await CityRepository.create({ name });

    return res.status(httpCodes.OK).send(city);
  }

  async update(req, res) {
    logger.info('CityController - Update - OK');

    const { id } = req.params;
    const city = await CityRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(city);
  }

  async delete(req, res) {
    logger.info('CityController - Delete - OK');

    const { id } = req.params;
    await CityRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'City deleted with success' });
  }
}

export default new CityController();
