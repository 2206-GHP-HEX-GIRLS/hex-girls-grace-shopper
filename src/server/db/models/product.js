const db = require('../db');
const Sequelize = require('sequelize');

module.exports = db.define('product', {
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
      'https://cdn-icons.flaticon.com/png/512/4670/premium/4670867.png?token=exp=1659780227~hmac=be30fc5ebc547b3af3b0b60fe2d62a7a',
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM('Cookies', 'Cakes', 'Pastries'),
    allowNull: false,
  },
});
