const db = require("./db");
const Product = require("./models/product");
const Review = require("./models/review");
const User = require("./models/user");
const Order = require("./models/order");

//associations here!
User.hasMany(Product);
Product.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Order.belongsToMany(Product);
Product.belongsToMany(Order);

module.exports = {
  db,
  models: {
    Product,
    User,
    Review,
    Order,
  },
};
