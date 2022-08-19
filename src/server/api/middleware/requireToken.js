const getAuth = require("firebase/auth");
const User = require("../../db/models/user");

const requireToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const user = await getAuth().getUser(token);
    if (user) {
      req.user = user;
      next();
    } else {
      try {
        const user = await User.byToken(token);
        if (user) {
          req.user = user;
          next();
        }
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = requireToken;
