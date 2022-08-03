const Sequelize = require("sequelize");
const db = require("./db");
const Product = require("./models/product.js");
const Review = require("./models/review.js");
const User = require("./models/user.js");
const Order = require("./models/order.js");

//associations here!
User.hasMany(Product);
Product.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Order.belongsToMany(Product, { through: "OrderProduct" });
Product.belongsToMany(Order, { through: "OrderProduct" });

module.exports = {
  db,
  models: {
    Product,
    User,
    Review,
    Order,
  },
};
