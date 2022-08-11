const router = require("express").Router();

router.use("/products", require("./products"));
router.use("/users", require("./user"));
router.use("/order", require("./order"));
router.use("/cart", require("./cart"));
router.use("/category", require("./category"));
router.use("/review", require("./review"));

router.use("*", (req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
