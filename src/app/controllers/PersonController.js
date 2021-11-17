import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import CityRepository from '../../repository/city.repository';
import PersonRepository from '../../repository/person.repository';

class PersonController {
  async get(req, res) {
    logger.info('PersonController - Show - OK');

    const { id } = req.params;

    const person = await PersonRepository.getPerson(id);

    return res.status(httpCodes.OK).send(person);
  }

  async getAll(req, res) {
    logger.info('PersonController - Index - OK');

    const person = await PersonRepository.getAll();

    return res.status(httpCodes.OK).send(person);
  }

  async create(req, res) {
    logger.info('PersonController - Create - OK');

    const { name, email, password, city, eLar } = req.body;

    const resultResponse = await CityRepository.getCity(city);
    if (!resultResponse) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'City not found' });
    }
    if (await PersonRepository.getEmail(email)) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Email already exists' });
    }

    const person = await PersonRepository.create({ name, email, password, city, eLar });

    return res.status(httpCodes.OK).send(person);
  }

  async update(req, res) {
    logger.info('PersonController - Update - OK');

    const { id } = req.params;
    const person = await PersonRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(person);
  }

  async delete(req, res) {
    logger.info('PersonController - Delete - OK');

    const { id } = req.params;
    await PersonRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Person deleted with success' });
  }
}

export default new PersonController();
