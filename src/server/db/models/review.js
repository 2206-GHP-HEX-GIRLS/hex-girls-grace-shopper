const db = require("../db");
const Sequelize = require("sequelize");

module.exports = db.define("review", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      max: 5,
      min: 1,
    },
  },
});
