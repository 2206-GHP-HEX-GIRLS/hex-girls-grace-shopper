const router = require("express").Router();
const { User } = require("../db");
const bcrypt = require("bcrypt");

router.get("/:username/:password", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.params.username,
      },
    });
    if (user) {
      const match = await bcrypt.compare(req.params.password, user.password);
      if (match) {
        res.json(user);
      }
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 5);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPwd,
    });
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({ message: "Username and password are required." });

    const foundUser = await User.find((person) => person.username === username);
    if (!foundUser) return res.sendStatus(401); //unauth'd!

    //evaluate pw
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      //create JWT
      res.json({ success: `User ${username} is logged in!` });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {}
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = await User.findByPk(req.params.id);
    if (!deleteUser) {
      res.sendStatus(404);
    } else {
      await deleteUser.destroy();
      res.json(deleteUser);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
