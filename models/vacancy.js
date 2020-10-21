"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vacancy.belongsTo(models.user);
      vacancy.hasMany(models.message);
    }
  }
  vacancy.init(
    {
      vacancyName: {
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
      careerLevel: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "vacancy",
    }
  );
  return vacancy;
};
