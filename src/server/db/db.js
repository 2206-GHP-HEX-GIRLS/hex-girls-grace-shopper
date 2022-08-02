const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/bakery");
module.exports = db;
