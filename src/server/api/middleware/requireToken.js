const getAuth = require("firebase/auth");
const User = require("../../db/models/user");

const requireToken = async (req, res, next) => {
  // const token = req.headers.authorization;
  try {
    // const user = await User;
    // req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = requireToken;
