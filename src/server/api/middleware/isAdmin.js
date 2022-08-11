const User = require("../../db/models/user");

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.accountId);
    if (user.isAdmin) {
      next();
      return;
    }
    res.status(403).send("requires an admin");
  } catch (error) {
    next(error);
  }
};

module.exports = isAdmin;
