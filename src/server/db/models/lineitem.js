const db = require("../db");
const Sequelize = require("sequelize");

module.exports = db.define("lineitem", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      "https://cdn-icons.flaticon.com/png/512/4670/premium/4670867.png?token=exp=1659780227~hmac=be30fc5ebc547b3af3b0b60fe2d62a7a",
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});
