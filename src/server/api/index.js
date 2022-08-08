const router = require('express').Router();

router.use('/products', require('./products'));
router.use('/user', require('./user'));
router.use('/order', require('./order'));
router.use('/register', require('./register'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
