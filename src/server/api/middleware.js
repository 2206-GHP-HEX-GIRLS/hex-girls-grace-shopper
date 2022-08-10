const User = require('../db/models/User');

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (user.isAdmin) {
      next();
      return;
    }
    res.status(403).send('requires an admin');
  } catch (error) {
    next(error);
  }
};

module.exports = { requireToken, isAdmin };
