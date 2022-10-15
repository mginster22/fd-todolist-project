const { Task, User } = require("../models");
const { Op } = require("sequelize");
const _ = require("lodash");

module.exports.createTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
    const values = _.pick(body, ["content", "isDone", "deadline"]);
    const user = await User.findByPk(userId);
    const task = await user.createTask(values);
    res.status(201).send({ data: task });
  } catch (error) {
    next(error);
  }
};
module.exports.getUserTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
    const user = await User.findByPk(userId);
    const tasks = await user.getTasks();
    res.status(200).send({ data: tasks });
  } catch (error) {
    next(error);
  }
};
module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).send({ data: tasks });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteUserTaskId = async (req, res, next) => {
  try {
    const {
      params: { userId, taskId },
    } = req;
    const [task] = await Task.findAll({
      where: {
        [Op.and]: [{ id: taskId }, { userId: userId }],
      },
    });
    await task.destroy();
    res.status(201).send({ data: task });
  } catch (error) {
    next(error);
  }
};
module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId, taskId },
    } = req;
    const [task] = await Task.findAll({
      where: {
        [Op.and]: [{ id: taskId }, { userId: userId }],
      },
    });
    await task.update(body);
    res.status(200).send({ data: task });
  } catch (error) {
    next(error);
  }
};
