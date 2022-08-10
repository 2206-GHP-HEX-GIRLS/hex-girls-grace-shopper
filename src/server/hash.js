const bcrypt = require("bcrypt");

const getHash = (text) => {
  return bcrypt.hash(text, 5);
};

module.exports = getHash;
