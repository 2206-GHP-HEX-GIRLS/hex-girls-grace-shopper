const db = require("./db");
const { Order, Product, Review, User } = require("./index").models;

const products = [
  {
    name: "Chocolate chip coookie",
    price: 1.5,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/541/541732.png",
    description: "Yummy",
    quantity: 1,
    category: "Cookies",
  },
  {
    name: "Galaxy chip coookie",
    price: 2.5,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/164/164659.png",
    description: "Out of this world",
    quantity: 1,
    category: "Cookies",
  },
  {
    name: "Strawberry short cake",
    price: 10.0,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/992/992754.png",
    description: "Short",
    quantity: 1,
    category: "Cakes",
  },
  {
    name: "croissant",
    price: 2.0,
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/3070/premium/3070562.png?token=exp=1659473775~hmac=d1ad513131ed9a681c6c1c927196ff5f",
    description: "bent",
    quantity: 1,
    category: "Pastries",
  },
];

const users = [
  {
    username: "Coookie Monster",
    password: "123",
    email: "sweettooth@gmail.com",
  },
];

const seed = async () => {
  try {
    await db.sync();
    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    console.log("db synced");
  } catch (error) {
    console.error(error);
  }
};

seed();

module.exports = seed;
