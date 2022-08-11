const db = require("../db");
const Sequelize = require("sequelize");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true,
  //   validate: {
  //     notEmpty: true,
  //     isEmail: true,
  //   },
  // },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  accountId: {
    type: Sequelize.BIGINT,
  },
});

module.exports = User;
