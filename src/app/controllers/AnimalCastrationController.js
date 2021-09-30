import castrationTypes from '../../helpers/enums/castrationTypes';
import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import AnimalCastrationRepository from '../../repository/animalCastration.repository';

class AnimalCastrationController {
  async getAll(req, res) {
    logger.info('AnimalCastrationController - Index - OK');

    const animalCastration = await AnimalCastrationRepository.getAll();

    return res.status(httpCodes.OK).send(animalCastration);
  }

  async create(req, res) {
    logger.info('AnimalCastrationController - Create - OK');

    const { description } = req.body;

    if (!Object.values(castrationTypes).includes(description)) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Invalid Castration' });
    }

    const AnimalCastration = await AnimalCastrationRepository.create({ description });

    return res.status(httpCodes.OK).send(AnimalCastration);
  }

  async update(req, res) {
    logger.info('AnimalCastrationController - Update - OK');

    const { id } = req.params;
    const animalCastration = await AnimalCastrationRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(animalCastration);
  }

  async delete(req, res) {
    logger.info('AnimalCastrationController - Delete - OK');

    const { id } = req.params;
    await AnimalCastrationRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Animal height deleted with success' });
  }
}

export default new AnimalCastrationController();
