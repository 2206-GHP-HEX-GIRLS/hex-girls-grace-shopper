const router = require('express').Router();
const Product = require('../db/models/product');

router.get('/:category', async (req, res, next) => {
  try {
    const category = await Product.findAll({
      where: { category: req.params.category },
    });
    res.json(category);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
