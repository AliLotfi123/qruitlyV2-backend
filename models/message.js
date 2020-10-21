"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      message.belongsTo(models.candidate);
      message.belongsTo(models.vacancy);
    }
  }
  message.init(
    {
      subject: DataTypes.STRING,
      description: DataTypes.STRING,
      senderName: DataTypes.STRING,
      senderCompany: DataTypes.STRING,
      receiverName: DataTypes.STRING,
      receiverCompany: DataTypes.STRING,
      candidateName: DataTypes.STRING,
      VacancyName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "message",
    }
  );
  return message;
};
