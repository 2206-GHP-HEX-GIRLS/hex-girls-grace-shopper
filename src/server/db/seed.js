const { db, Product, User, Review } = require('../db');

const products = [
  {
    name: 'Chocolate Chip Cookie',
    price: 1.5,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/541/541732.png',
    description:
      'Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie',
    quantity: 20,
    category: 'Cookies',
  },
  {
    name: 'Galaxy Chip Cookie',
    price: 2.5,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/164/164659.png',
    description:
      'Soft and chewy Galaxy Chocolate Chip Cookies, with a crispy edge and a gooey centre filled with melted chunks of Galaxy milk chocolate.',
    quantity: 15,
    category: 'Cookies',
  },
  {
    name: 'Gingerbread Man',
    price: 3,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3753/3753480.png',
    description:
      'Soft in the centers, crisp on the edges, perfectly spiced, molasses and brown sugar-sweetened holiday goodness.',
    quantity: 8,
    category: 'Cookies',
  },
  {
    name: 'Linzer Cookies',
    price: 1.75,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/7627/7627810.png',
    description:
      'Buttery, jam-filled sandwich cookies based on the classic Viennese Linzer torte.',
    quantity: 16,
    category: 'Cookies',
  },
  {
    name: 'Big O Cookie',
    price: 2.25,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/293/293635.png',
    description:
      'A sandwich cookie consisting of two wafers with a sweet creme filling.',
    quantity: 15,
    category: 'Cookies',
  },
  {
    name: 'Strawberry Shortcake',
    price: 10.0,
    imageUrl:
      'https://cdn-icons.flaticon.com/png/512/1349/premium/1349830.png?token=exp=1659787002~hmac=053d58a4cd53ddedfbe8b11b0cd37377',
    description:
      'A tender vanilla cake filled with layers of whipped cream frosting and juicy strawberries.',
    quantity: 10,
    category: 'Cakes',
  },
  {
    name: 'Black Forest Cake',
    price: 8.0,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/817/817318.png',
    description: 'Chocolate sponge cake with a rich cherry filling.',
    quantity: 8,
    category: 'Cakes',
  },
  {
    name: 'Cherry Cake',
    price: 9.75,
    imageUrl:
      'https://cdn-icons.flaticon.com/png/512/3067/premium/3067980.png?token=exp=1659787002~hmac=35aad2fbf2e0be8813f8722ca8b22a12',
    description:
      'This moist scratch Cherry Cake recipe is tender, flavorful, and is the prettiest shade of pink!',
    quantity: 11,
    category: 'Cakes',
  },
  {
    name: 'NY Style Cheesecake',
    price: 14.99,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/454/454561.png',
    description:
      'Classic New York-style cheesecake with a buttery graham cracker crust and rich, dense filling',
    quantity: 11,
    category: 'Cakes',
  },
  {
    name: 'Carrot Cake',
    price: 10.99,
    imageUrl:
      'https://cdn-icons.flaticon.com/png/512/2447/premium/2447809.png?token=exp=1659787267~hmac=f3e100c21c0d66641b2fb6ac053f5664',
    description:
      'A simple, moist, yummy carrot cake with cream cheese frosting.',
    quantity: 12,
    category: 'Cakes',
  },
  {
    name: 'Croissant',
    price: 2.0,
    imageUrl: 'https://i.imgur.com/etqhIPo.png',
    description:
      'A buttery, crescent-shaped French pastry. Light, flaky, and delicately sweet',
    quantity: 14,
    category: 'Pastries',
  },
  {
    name: 'Cream Puff',
    price: 1.25,
    imageUrl:
      'https://cdn-icons.flaticon.com/png/512/842/premium/842784.png?token=exp=1659787922~hmac=c016afa8a5dabeea6d1af73c84b5e4b7',
    description:
      'French choux pastry ball with a sweet and moist filling of pastry cream.',
    quantity: 11,
    category: 'Pastries',
  },
  {
    name: 'Eclair',
    price: 2.5,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1075/1075868.png',
    description:
      'Choux dough filled with a pastry cream and topped with chocolate icing.',
    quantity: 9,
    category: 'Pastries',
  },
  {
    name: 'Fruit Tart',
    price: 3,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/6603/6603601.png',
    description:
      'A buttery shortbread crust, a creamy vanilla custard, and heaps of fresh fruit.',
    quantity: 10,
    category: 'Pastries',
  },
  {
    name: 'Pastel de Nata',
    price: 3.75,
    imageUrl:
      'https://cdn-icons.flaticon.com/png/512/3956/premium/3956188.png?token=exp=1659787666~hmac=d80b314ede50dee35842e368e4f10c7c',
    description: 'Portuguese egg custard tart with the flakiest crust.',
    quantity: 16,
    category: 'Pastries',
  },
];

const users = [
  {
    username: 'Cookie Monster',
    password: '123',
    email: 'sweettooth@gmail.com',
  },
  {
    username: 'Bent Croissant',
    password: '456',
    email: 'flakeyfullstack@gmail.com',
  },
];

const reviews = [
  {
    content: 'wow what a great croissant',
    rating: 5,
    userId: 1,
    productId: 4,
  },
  {
    content: 'wow what a great cake',
    rating: 2,
    userId: 2,
    productId: 3,
  },
  {
    content: 'wow what a yummy cookie',
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
    console.log('db synced');
    db.close();
  } catch (error) {
    console.error(error);
    console.error('Failed to seed! :(');
    db.close();
  }
};

seed();
