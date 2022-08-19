const { db, Product, User, Review } = require("../db");

const products = [
  {
    name: "Chocolate Chip Cookie",
    price: 1.5,
    imageUrl: "https://i.imgur.com/EV8FQlU.png",
    description:
      "Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie",
    quantity: 20,
    category: "Cookies",
  },
  {
    name: "Galaxy Chip Cookie",
    price: 2.5,
    imageUrl: "https://i.imgur.com/jBDRJ4r.png",
    description:
      "Soft and chewy Galaxy Chocolate Chip Cookies, with a crispy edge and a gooey centre filled with melted chunks of Galaxy milk chocolate.",
    quantity: 15,
    category: "Cookies",
  },
  {
    name: "Gingerbread Man",
    price: 3,
    imageUrl: "https://i.imgur.com/N8MEbtq.png",
    description:
      "Soft in the centers, crisp on the edges, perfectly spiced, molasses and brown sugar-sweetened holiday goodness.",
    quantity: 8,
    category: "Cookies",
  },
  {
    name: "Linzer Cookies",
    price: 1.75,
    imageUrl: "https://i.imgur.com/c7OeNIc.png",
    description:
      "Buttery, jam-filled sandwich cookies based on the classic Viennese Linzer torte.",
    quantity: 16,
    category: "Cookies",
  },
  {
    name: "Big O Cookie",
    price: 2.25,
    imageUrl: "https://i.imgur.com/GeIEgHS.png",
    description:
      "A sandwich cookie consisting of two wafers with a sweet creme filling.",
    quantity: 15,
    category: "Cookies",
  },
  {
    name: "Strawberry Shortcake",
    price: 10.0,
    imageUrl: "https://i.imgur.com/FZ7ruLA.png",
    description:
      "A tender vanilla cake filled with layers of whipped cream frosting and juicy strawberries.",
    quantity: 10,
    category: "Cakes",
  },
  {
    name: "Black Forest Cake",
    price: 8.0,
    imageUrl: "https://i.imgur.com/HNwDvtB.png",
    description: "Chocolate sponge cake with a rich cherry filling.",
    quantity: 8,
    category: "Cakes",
  },
  {
    name: "Cherry Cake",
    price: 9.75,
    imageUrl: "https://i.imgur.com/vyN0FRp.png",
    description:
      "This moist scratch Cherry Cake recipe is tender, flavorful, and is the prettiest shade of pink!",
    quantity: 11,
    category: "Cakes",
  },
  {
    name: "NY Style Cheesecake",
    price: 14.99,
    imageUrl: "https://i.imgur.com/WjRg0NG.png",
    description:
      "Classic New York-style cheesecake with a buttery graham cracker crust and rich, dense filling",
    quantity: 11,
    category: "Cakes",
  },
  {
    name: "Carrot Cake",
    price: 10.99,
    imageUrl: "https://i.imgur.com/QswyLrp.png",
    description:
      "A simple, moist, yummy carrot cake with cream cheese frosting.",
    quantity: 12,
    category: "Cakes",
  },
  {
    name: "Croissant",
    price: 2.0,
    imageUrl: "https://i.imgur.com/YjhnjKj.png",
    description:
      "A buttery, crescent-shaped French pastry. Light, flaky, and delicately sweet",
    quantity: 14,
    category: "Pastries",
  },
  {
    name: "Cream Puff",
    price: 1.25,
    imageUrl: "https://i.imgur.com/nNXh87c.png",
    description:
      "French choux pastry ball with a sweet and moist filling of pastry cream.",
    quantity: 11,
    category: "Pastries",
  },
  {
    name: "Eclair",
    price: 2.5,
    imageUrl: "https://i.imgur.com/VPBLz9j.png",
    description:
      "Choux dough filled with a pastry cream and topped with chocolate icing.",
    quantity: 9,
    category: "Pastries",
  },
  {
    name: "Fruit Tart",
    price: 3,
    imageUrl: "https://i.imgur.com/D4SX4D8.png",
    description:
      "A buttery shortbread crust, a creamy vanilla custard, and heaps of fresh fruit.",
    quantity: 10,
    category: "Pastries",
  },
  {
    name: "Pastel de Nata",
    price: 3.75,
    imageUrl: "https://i.imgur.com/gA0gatk.png",
    description: "Portuguese egg custard tart with the flakiest crust.",
    quantity: 16,
    category: "Pastries",
  },
];

const users = [
  {
    username: "CookieMonster",
    password: "CookieMonster123!",
    accountId: 11111111,
  },
  {
    username: "BentCroissant",
    password: "BentCroissant456!",
    accountId: 22222222,
  },
  {
    username: "YummyCookie",
    password: "YummyCookie456!",
    accountId: 12345678,
    isAdmin: true,
  },
];

const reviews = [
  {
    content: "Wow! What a great croissant",
    rating: 5,
    userId: 1,
    productId: 11,
  },
  {
    content: "Wow! What a great cake",
    rating: 2,
    userId: 2,
    productId: 6,
  },
  {
    content: "Wow! What a yummy cookie",
    rating: 5,
    userId: 1,
    productId: 2,
  },
  {
    content: "This cookie is so soft",
    rating: 4,
    userId: 2,
    productId: 2,
  },
  {
    content: "This cookie has so much chocolate, I love it!",
    rating: 4,
    userId: 2,
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
