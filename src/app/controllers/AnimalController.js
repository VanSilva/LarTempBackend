import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import AnimalRepository from '../../repository/animal.repository';
import AnimalCastrationRepository from '../../repository/animalCastration.repository';
import AnimalHeightRepository from '../../repository/animalHeight.repository';
import AnimalTypeRepository from '../../repository/animalType.repository';
import AnimalVaccineRepository from '../../repository/animalVaccine.repository';

class AnimalController {
  async getAll(req, res) {
    logger.info('AnimalController - Index - OK');

    const animal = await AnimalRepository.getAll();

    return res.status(httpCodes.OK).send(animal);
  }

  async create(req, res) {
    logger.info('AnimalController - Create - OK');

    const { name, image, history, observation, years, type, height, vaccine, castration } = req.body;

    const stringLength = image.length - 'data:image/jpeg;base64,'.length;
    const sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
    const sizeInKb = sizeInBytes / 1000;

    if (sizeInKb.toFixed(2) > 124) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Image too large' });
    }

    for (let index = 0; index < vaccine.length; index++) {
      if (!(await AnimalVaccineRepository.getAnimalVaccine(vaccine[index].vaccine))) {
        return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Animal vaccine not found' });
      }
    }

    if (!(await AnimalTypeRepository.getAnimalType(type))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Animal type not found' });
    }
    if (!(await AnimalHeightRepository.getAnimalHeight(height))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Animal height not found' });
    }

    if (!(await AnimalCastrationRepository.getAnimalCastration(castration))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Animal castration not found' });
    }

    const animal = await AnimalRepository.create({
      name,
      image,
      history,
      observation,
      years,
      type,
      height,
      vaccine,
      castration
    });

    return res.status(httpCodes.OK).send(animal);
  }

  async update(req, res) {
    logger.info('AnimalController - Update - OK');

    const { id } = req.params;
    const animal = await AnimalRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(animal);
  }

  async delete(req, res) {
    logger.info('AnimalController - Delete - OK');

    const { id } = req.params;
    await AnimalRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Animal deleted with success' });
  }
}

export default new AnimalController();
