const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('cart', {
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});
