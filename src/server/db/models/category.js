const db = require("../db");
const Sequelize = require("sequelize");

module.exports = db.define("category", {
  name: {
    type: Sequelize.ENUM("Cookies", "Cakes", "Pastries"),
    allowNull: false,
  },
});
