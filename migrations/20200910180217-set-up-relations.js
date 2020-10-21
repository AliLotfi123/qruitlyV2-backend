"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("candidates", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("vacancies", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("messages", "candidateId", {
      type: Sequelize.INTEGER,
      references: {
        model: "candidates",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("messages", "vacancyId", {
      type: Sequelize.INTEGER,
      references: {
        model: "vacancies",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("candidates", "userId");
    await queryInterface.removeColumn("vacancies", "userId");
    await queryInterface.removeColumn("messages", "candidateId");
    await queryInterface.removeColumn("messages", "vacancyId");
  },
};
