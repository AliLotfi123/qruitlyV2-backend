"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("messages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subject: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      senderName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      senderCompany: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      receiverName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      receiverCompany: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      candidateName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      VacancyName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("messages");
  },
};
