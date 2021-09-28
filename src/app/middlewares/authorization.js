import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);
    req.person = decode;
    return next();
  } catch (error) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }
};
