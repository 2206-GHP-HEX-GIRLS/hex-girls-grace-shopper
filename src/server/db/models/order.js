const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('order', {
  items: {
    // MAY NEED TO COME BACK TO THIS :)
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: '',
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: '2.50',
  },
});
