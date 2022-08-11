const router = require('express').Router();
const { Product, Review } = require('../db/');
const isAdmin = require('./middleware/isAdmin');
const requireToken = require('./middleware/requireToken');

//display all products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (error) {
    next(error);
  }
});

//display single product
router.get('/:id', async (req, res, next) => {
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
router.post('/', isAdmin, requireToken, async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});

//delete product ADMINS ONLY
router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error);
  }
});

//update product ADMINS ONLY
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update(req.body));
  } catch (error) {
    next(error);
  }
});

//post new review
router.post('/:id/review', async (req, res, next) => {
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
