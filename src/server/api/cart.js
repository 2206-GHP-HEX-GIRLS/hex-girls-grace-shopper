const router = require("express").Router();
const { LineItem } = require("../db");
const product = require("../db/models/product");

router.get("/", async (req, res, next) => {
  try {
    const cart = await LineItem.findAll();
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // NEED HELP HERE
    // const newItem = await LineItem.create({
    //   name: req.body.name,
    //   price: req.body.price,
    //   imageUrl: req.body.imageUrl,
    //   quantity: 1,
    // });
    // console.log(newItem);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedCartItem = await LineItem.findByPk(req.params.id);
    res.json(await updatedCartItem.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
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
