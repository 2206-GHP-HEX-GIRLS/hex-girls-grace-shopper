const db = require("../db");
const Sequelize = require("sequelize");
// const LineItem = require("./lineitem");

const User = db.define("user", {
  username: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true,
  //   validate: {
  //     notEmpty: true,
  //     isEmail: true,
  //   },
  // },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  accountId: {
    type: Sequelize.BIGINT,
  },
  thirdPartyUsername: {
    type: Sequelize.TEXT,
  },
});

// User.byToken = async (token) => {
//   try {
//     const user = await User.findByPk(token);
//     if (user) {
//       return user;
//     }
//   } catch (err) {
//     const error = Error("Invalid Credentials");
//     error.status = 401;
//     throw error;
//   }
// };

// User.authenticate = async ({ username, password }) => {
//   const user = await User.findOne({
//     where: {
//       username,
//       password,
//     },
//   });

//   if (user) {
//     return user.id;
//   }

//   const error = Error("Invalid Credentials");
//   error.status = 401;
//   throw error;
// };

// User.prototype.addLineItems = async function (product) {
//   let cart = await this.getLineItems();
//   let lineItem = cart.lineItems.find(
//     (lineItem) => lineItem.productId === product.id
//   );
//   if (lineItem) {
//     lineItem.quantity++;
//     await lineItem.save();
//   } else {
//     await LineItem.create({
//       productId: product.id,
//       orderId: cart.id,
//       quantity: 1,
//       price: product.price,
//     });
//   }
//   return this.getLineItems();
// };

module.exports = User;
