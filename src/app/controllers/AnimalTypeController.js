import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import AnimalTypeRepository from '../../repository/animalType.repository';

class AnimalTypeController {
  async get(req, res) {
    logger.info('AnimalTypeController - Show - OK');

    const { id } = req.params;

    const animalType = await AnimalTypeRepository.getAnimalType(id);

    return res.status(httpCodes.OK).send(animalType);
  }

  async getAll(req, res) {
    logger.info('AnimalTypeController - Index - OK');

    const animalType = await AnimalTypeRepository.getAll();

    return res.status(httpCodes.OK).send(animalType);
  }

  async create(req, res) {
    logger.info('AnimalTypeController - Create - OK');

    const { description } = req.body;
    const animalType = await AnimalTypeRepository.create({ description });

    return res.status(httpCodes.OK).send(animalType);
  }

  async update(req, res) {
    logger.info('AnimalTypeController - Update - OK');

    const { id } = req.params;
    const animalType = await AnimalTypeRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(animalType);
  }

  async delete(req, res) {
    logger.info('AnimalTypeController - Delete - OK');

    const { id } = req.params;
    await AnimalTypeRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Animal Type deleted with success' });
  }
}

export default new AnimalTypeController();
