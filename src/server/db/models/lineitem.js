const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('lineitem', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
});
