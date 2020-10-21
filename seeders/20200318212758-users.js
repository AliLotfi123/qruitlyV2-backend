"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Rein",
          lastName: "op 't Land",
          company: "Codaisseur",
          email: "rein@rein.com",
          password: bcrypt.hashSync("rein123", SALT_ROUNDS),
          isRecruiter: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ali",
          lastName: "Lotfi",
          company: "Codaisseur",
          email: "a.lotfi@outlook.com",
          password: bcrypt.hashSync("ali123", SALT_ROUNDS),
          isRecruiter: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
