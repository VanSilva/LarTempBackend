import heightTypes from '../../helpers/enums/heightTypes';
import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import AnimalHeightRepository from '../../repository/animalHeight.repository';

class AnimalHeightController {
  async getAll(req, res) {
    logger.info('AnimalHeightController - Index - OK');

    const animalHeight = await AnimalHeightRepository.getAll();

    return res.status(httpCodes.OK).send(animalHeight);
  }

  async create(req, res) {
    logger.info('AnimalHeightController - Create - OK');

    const { description } = req.body;

    if (!Object.values(heightTypes).includes(description)) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Invalid Height' });
    }

    const animalHeight = await AnimalHeightRepository.create({ description });

    return res.status(httpCodes.OK).send(animalHeight);
  }

  async update(req, res) {
    logger.info('AnimalHeightController - Update - OK');

    const { id } = req.params;
    const animalHeight = await AnimalHeightRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(animalHeight);
  }

  async delete(req, res) {
    logger.info('AnimalHeightController - Delete - OK');

    const { id } = req.params;
    await AnimalHeightRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Animal height deleted with success' });
  }
}

export default new AnimalHeightController();
