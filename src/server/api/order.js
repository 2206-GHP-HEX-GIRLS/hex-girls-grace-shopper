const router = require('express').Router();
const Cart = require('../db/models/lineitem');
// const { Order, User, Product } = require('../db/') might need to eventually require

//display cart
router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

//delete item from cart

//add item to cart?
//^^ this should just go back to the shop. most likely a
//component route/frontend route.

//update item in cart?
