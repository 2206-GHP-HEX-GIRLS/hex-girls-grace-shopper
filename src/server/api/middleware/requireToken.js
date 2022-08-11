const getAuth = require("firebase/auth");

const requireToken = async (req, res, next) => {
  const uid = req.headers.authorization;
  try {
    const userRecord = await getAuth().getUser(uid);
    req.user = userRecord;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = requireToken;
