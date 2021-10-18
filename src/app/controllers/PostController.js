import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import AnimalRepository from '../../repository/animal.repository';
import PersonRepository from '../../repository/person.repository';
import PostRepository from '../../repository/post.repository';

class PostController {
  async getAll(req, res) {
    logger.info('PostController - Index - OK');

    const post = await PostRepository.getAll();

    return res.status(httpCodes.OK).send(post);
  }

  async create(req, res) {
    logger.info('PostController - Create - OK');

    const { person, datePost, dateLar, isActive, animal } = req.body;

    if (!(await AnimalRepository.getAnimal(animal))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Animal not found' });
    }
    if (!(await PersonRepository.getPerson(person))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Person not found' });
    }

    const post = await PostRepository.create({ person, datePost, dateLar, isActive, animal });

    return res.status(httpCodes.OK).send(post);
  }

  async update(req, res) {
    logger.info('PostController - Update - OK');

    const { id } = req.params;
    const post = await PostRepository.update(id, req.body);

    return res.status(httpCodes.OK).send(post);
  }

  async delete(req, res) {
    logger.info('PostController - Delete - OK');

    const { id } = req.params;
    await PostRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Post deleted with success' });
  }
}

export default new PostController();
