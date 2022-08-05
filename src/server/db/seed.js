const { db, Product, User, Review, Order, LineItem } = require("../db");

const products = [
  {
    name: "Chocolate chip cookie",
    price: 1.5,
    imageUrl: "https://cdn-icons-png.flaticon.com/512/541/541732.png",
    description: "Yummy",
    quantity: 1,
    category: "Cookies",
  },
  {
    name: "Galaxy chip cookie",
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
    imageUrl: "https://i.imgur.com/etqhIPo.png",
    description: "bent",
    quantity: 1,
    category: "Pastries",
  },
];

const users = [
  {
    username: "Cookie Monster",
    password: "123",
    email: "sweettooth@gmail.com",
  },
  {
    username: "Bent Croissant",
    password: "456",
    email: "flakeyfullstack@gmail.com",
  },
];

const reviews = [
  {
    content: "wow what a great croissant",
    rating: 5,
    userId: 1,
    productId: 4,
  },
  {
    content: "wow what a great cake",
    rating: 2,
    userId: 2,
    productId: 3,
  },
  {
    content: "wow what a yummy cookie",
    rating: 2,
    userId: 1,
    productId: 2,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

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
    await Promise.all(
      reviews.map((review) => {
        return Review.create(review);
      })
    );
    console.log("db synced");
    db.close();
  } catch (error) {
    console.error(error);
    console.error("Failed to seed! :(");
    db.close();
  }
};

seed();
