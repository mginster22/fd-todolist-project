"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Task.init(
    {
      content: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      isDone: {
        field: "is_done",
        type: DataTypes.BOOLEAN,
        
      },
      deadline: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
      underscored: true,
    }
  );
  return Task;
};
