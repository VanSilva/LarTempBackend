import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import AnimalVaccineRepository from '../../repository/animalVaccine.repository';

class AnimalVaccineController {
  async get(req, res) {
    logger.info('AnimalVaccineRepository - Show - OK');

    const { id } = req.params;

    const animalVaccine = await AnimalVaccineRepository.getAnimalVaccine(id);

    return res.status(httpCodes.OK).send(animalVaccine);
  }

  async getAll(req, res) {
    logger.info('AnimalVaccineController - Index - OK');

    const animalVaccine = await AnimalVaccineRepository.getAll();

    return res.status(httpCodes.OK).send(animalVaccine);
  }

  async create(req, res) {
    logger.info('AnimalVaccineController - Create - OK');

    const { description } = req.body;

    if (await AnimalVaccineRepository.getAnimalVaccineDescription(description)) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Vaccine already exists' });
    }

    const animalVaccine = await AnimalVaccineRepository.create({ description });

    return res.status(httpCodes.OK).send(animalVaccine);
  }

  async update(req, res) {
    logger.info('AnimalVaccineController - Update - OK');

    const { id } = req.params;
    const animalVaccine = await AnimalVaccineRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(animalVaccine);
  }

  async delete(req, res) {
    logger.info('AnimalVaccineController - Delete - OK');

    const { id } = req.params;
    await AnimalVaccineRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Animal Vaccine deleted with success' });
  }
}

export default new AnimalVaccineController();
