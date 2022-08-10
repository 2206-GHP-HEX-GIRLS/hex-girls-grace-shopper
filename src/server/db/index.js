const db = require("./db");
const Product = require("./models/product");
const Review = require("./models/review");
const User = require("./models/user");
const Order = require("./models/order");
const LineItem = require("./models/lineitem");

//associations here!
User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Order.belongsToMany(Product, { through: LineItem });
Product.belongsToMany(Order, { through: LineItem });

LineItem.belongsTo(Product);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);

module.exports = {
  db,
  Product,
  User,
  Review,
  Order,
  LineItem,
};
