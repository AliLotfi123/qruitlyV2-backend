"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      candidate.belongsTo(models.user);
      candidate.hasMany(models.message);
    }
  }
  candidate.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      industry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      educationLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      careerLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "candidate",
    }
  );
  return candidate;
};
