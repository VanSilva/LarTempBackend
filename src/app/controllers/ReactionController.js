import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import PersonRepository from '../../repository/person.repository';
import PostRepository from '../../repository/post.repository';
import ReactionRepository from '../../repository/reaction.repository';

class ReactionController {
  async getAll(req, res) {
    logger.info('ReactionController - Index - OK');

    const reaction = await ReactionRepository.getAll();

    return res.status(httpCodes.OK).send(reaction);
  }

  async createLike(req, res) {
    logger.info('ReactionController - Create - OK');

    const { person, post } = req.body;

    if (!(await PersonRepository.getPerson(person))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Person not found' });
    }
    if (!(await PostRepository.getPost(post))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Post not found' });
    }

    const reaction = await ReactionRepository.create({ person, post });

    return res.status(httpCodes.OK).send(reaction);
  }

  async createDislike(req, res) {
    logger.info('ReactionController - Create - OK');

    const { post, reaction, person } = req.body;

    if (!(await PersonRepository.getPerson(person))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Person not found' });
    }
    if (!(await PostRepository.getPost(post))) {
      return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Post not found' });
    }

    const total = await ReactionRepository.getDeslike(post, person, reaction);

    return res.send(total);
  }

  async delete(req, res) {
    logger.info('ReactionController - Delete - OK');

    const { id } = req.params;
    await ReactionRepository.delete(id);

    return res.status(httpCodes.OK).json({ message: 'Unreactiond' });
  }

  async getReactions(req, res) {
    logger.info('ReactionController - ShowReactions - OK');

    const { id } = req.params;
    const total = await ReactionRepository.getReactionsCount(id);
    const reactions = await ReactionRepository.getReactions(id);

    return res.status(httpCodes.OK).json({ total, reactions });
  }
}

export default new ReactionController();
