import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';

class LarController {
  async index(req, res) {
    logger.info('LarController - Index - OK');

    return res.status(httpCodes.OK).json({ message: 'Welcome to Lar Temporário' });
  }
}

export default new LarController();
