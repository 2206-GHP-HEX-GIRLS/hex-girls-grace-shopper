const router = require('express').Router();
const { User } = require('../db/');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
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
