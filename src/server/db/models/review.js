const db = require("../db");
const Sequelize = require("sequelize");

const Review = db.define("review", {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Review;
