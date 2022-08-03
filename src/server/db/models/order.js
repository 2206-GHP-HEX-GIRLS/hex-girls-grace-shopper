const db = require("../db");
const Sequelize = require("sequelize");

const Order = db.define("order", {
  items: {
    // MAY NEED TO COME BACK TO THIS :)
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: "",
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Order;
