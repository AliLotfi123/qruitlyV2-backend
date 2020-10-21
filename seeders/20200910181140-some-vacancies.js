"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vacancies",
      [
        {
          vacancyName: "Developer",
          tags: ["Fulltime", "HBO", "Manager"],
          price: 7500,
          salary: 6500,
          description: "Looking for a good manager!",
          status: "Open",
          industry: "IT",
          hours: 40,
          educationLevel: 5,
          careerLevel: 6,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vacancyName: "Developer",
          tags: ["Master", "teacher", "Finance"],
          price: 4500,
          salary: 3500,
          description: "We want the best in finance!",
          status: "In Progress",
          industry: "Finance",
          hours: 36,
          educationLevel: 7,
          careerLevel: 9,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vacancies", null, {});
  },
};
