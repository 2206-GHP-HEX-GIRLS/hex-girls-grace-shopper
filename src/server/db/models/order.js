const db = require("../db");
const Sequelize = require("sequelize");

const Order = db.define("order", {
  items: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: {},
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Order;
