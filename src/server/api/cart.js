const router = require('express').Router();
const { LineItem, Order, Product } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        isPurchased: false,
      },
      include: [Product],
      order: [[Product, 'id', 'DESC']],
    });
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let cart = await Order.findOne({
      where: {
        isPurchased: false,
      },
      include: [Product],
    });
    if (!cart) {
      cart = await Order.create({
        isPurchased: false,
      });
    }
    let product = await LineItem.findOne({
      where: {
        orderId: cart.id,
        productId: req.body.id,
      },
    });
    if (!product) {
      await LineItem.create({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        orderId: cart.id,
        productId: req.body.id,
      });
    } else {
      let newQty = parseInt(product.quantity) + 1;
      await product.update({ quantity: newQty });
    }
    // res.send(cart)
    res.send(
      await Order.findOne({
        where: {
          id: cart.id,
        },
        include: [Product],
        order: [[Product, 'id', 'DESC']],
      })
    );
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    let cart = await Order.findOne({
      where: {
        isPurchased: false,
      },
      include: [Product],
    });
    if (!cart) {
      cart = await Order.create({
        isPurchased: false,
      });
    }
    let product = await LineItem.findOne({
      where: {
        orderId: cart.id,
        productId: req.body.item.id,
      },
    });
    const newQty = product.quantity + req.body.quantity;
    if (newQty <= 0) {
      await product.destroy();
    } else {
      await product.update({ quantity: newQty });
    }
    res.send(
      await Order.findOne({
        where: {
          id: cart.id,
        },
        include: [Product],
        order: [[Product, 'id', 'DESC']],
      })
    );
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedCartItem = await LineItem.findByPk(req.params.id);
    if (!deletedCartItem) {
      res.send(404);
    } else {
      await deletedCartItem.destroy();
      res.json(deletedCartItem);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
