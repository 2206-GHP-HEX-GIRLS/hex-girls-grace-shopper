const db = require("../db");
const Sequelize = require("sequelize");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true,
  //   validate: {
  //     notEmpty: true,
  //     isEmail: true,
  //   },
  // },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  accountId: {
    type: Sequelize.BIGINT,
  },
});

User.byToken = async (token) => {
  try {
    const user = await User.findByPk(token);
    if (user) {
      return user;
    }
  } catch (err) {
    const error = Error("Invalid Credentials");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({
    where: {
      username,
      password,
    },
  });

  if (user) {
    return user.id;
  }

  const error = Error("Invalid Credentials");
  error.status = 401;
  throw error;
};

module.exports = User;
