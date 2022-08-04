const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('order', {
  total: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0,
  },
});
