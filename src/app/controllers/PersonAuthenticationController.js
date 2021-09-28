import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import httpCodes from '../../helpers/enums/httpCodes';
import logger from '../../helpers/logger';
import PersonRepository from '../../repository/person.repository';

class PersonAuthenticationController {
  async login(req, res) {
    logger.info('PersonAuthenticationController - Login - OK');

    try {
      const { email, password } = req.body;
      const resultResponse = await PersonRepository.getEmail(email);
      if (!resultResponse) {
        return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Email not found' });
      }
      if (!(await bcrypt.compare(password, resultResponse.password))) {
        return res.status(httpCodes.BAD_REQUEST).json({ msg: 'Invalid password' });
      }

      // TODO: mover para o authorization
      const time = process.env.JWT_EXPIRATION;
      const token = jwt.sign(
        {
          resultResponse
        },
        process.env.JWT_KEY,
        {
          expiresIn: time
        }
      );
      return res.status(200).send({
        msg: 'Authention success',
        token,
        time
      });
    } catch (err) {
      return res.status(400).json({ error: 'Person authentication failed' });
    }
  }
}

export default new PersonAuthenticationController();
