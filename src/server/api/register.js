const router = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const usersDatabase = {
  // users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  },
};

const createNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });
  const duplicate = usersDatabase.users.find(
    (person) => person.username === user
  );
  if (duplicate) return res.sendStatus(409);
  try {
    const hashedPwd = await bcrypt.hash(pwd, 5);
    const newUser = { username: user, password: hashedPwd };
    usersDatabase.setUsers([...usersDatabase.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDatabase.users)
    );
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

router.post('/', createNewUser);

module.exports = router;
