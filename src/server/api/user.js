const router = require('express').Router();
const { User } = require('../db/');
const bcrypt = require('bcrypt');

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
    const hashedPwd = await bcrypt.hash(req.body.password, 5);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPwd,
    });
    console.log('BACK END: ', newUser);
    res.status(201).json({ success: `New user ${newUser.username} created!` });
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
