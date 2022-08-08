const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('user', {
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
});
