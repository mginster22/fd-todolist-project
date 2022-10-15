"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      password: {
        field: "password_hash",
        type: DataTypes.TEXT,
        allowNull: false,
        set(value) {
          this.setDataValue("password", "new_password_hash");
        },
      },
      avatar: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );
  return User;
};
