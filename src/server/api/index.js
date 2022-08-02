const router = require('express').Router();

// routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`

router.use('/allproducts', require('./allproducts'));

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
