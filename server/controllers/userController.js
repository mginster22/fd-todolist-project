const { User } = require("../models");
const _ = require("lodash");
const createError = require("http-errors");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    if (req.file) {
      body.avatar = req.file.filename;
    }
    const values = _.pick(body, ["login", "password", "avatar", "name"]);
    const user = await User.create(values);
    if (!user) {
      next(createError(400, "invalid data!!"));
    }
    const userPrepare = _.omit(user.get(), ["password"]);
    res.status(200).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};
module.exports.getAllUsers = async (req, res, next) => {
  const { pagination = {} } = req;
  try {
    const totalUsers = await User.findAll();
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
      ...pagination,
    });
    res.status(200).send({ data: { users, totalUsers } });
  } catch (error) {
    next(error);
  }
};
module.exports.getUserById = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findByPk(userId);
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id);
    await user.destroy();
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};
module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
    if (req.file) {
      body.avatar = req.file.filename;
    }
    const users = await User.findByPk(userId);
    const user = users.update(body, { returning: true });
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};
