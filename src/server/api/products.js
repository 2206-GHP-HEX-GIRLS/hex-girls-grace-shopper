<<<<<<< HEAD
const router = require("express").Router();
const { Product, Review } = require("../db/");
=======
const router = require('express').Router();
const { Product, Review } = require('../db/');
const isAdmin = require('./middleware/isAdmin');
const requireToken = require('./middleware/requireToken');
>>>>>>> aa6354953ab890d30eb2c4e1f9fe63681c1aa7f5

//display all products
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (error) {
    next(error);
  }
});

//display single product
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Review,
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

//create product ADMINS ONLY
<<<<<<< HEAD
router.post("/", async (req, res, next) => {
  console.log("POSTING");
  try {
    const product = await Product.create(req.body);
    res.json(product);
=======
router.post('/', isAdmin, async (req, res, next) => {
  const { price, quantity, description, category, name } = req.body;
  try {
    res.status(201).send(
      await Product.create({
        name,
        price,
        quantity,
        description,
        category,
      })
    );
>>>>>>> aa6354953ab890d30eb2c4e1f9fe63681c1aa7f5
  } catch (error) {
    next(error);
  }
});

//delete product ADMINS ONLY
<<<<<<< HEAD
router.delete("/:id", async (req, res, next) => {
=======
router.delete('/:id', isAdmin, requireToken, async (req, res, next) => {
>>>>>>> aa6354953ab890d30eb2c4e1f9fe63681c1aa7f5
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error);
  }
});

//update product ADMINS ONLY
<<<<<<< HEAD
router.put("/:id", async (req, res, next) => {
=======
router.put('/:id', isAdmin, requireToken, async (req, res, next) => {
>>>>>>> aa6354953ab890d30eb2c4e1f9fe63681c1aa7f5
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  } catch (error) {
    next(error);
  }
});

//post new review
router.post("/:id/review", async (req, res, next) => {
  try {
    await Review.create({
      content: req.body.content,
      rating: req.body.rating,
      productId: req.body.productId,
    });
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Review,
      },
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
