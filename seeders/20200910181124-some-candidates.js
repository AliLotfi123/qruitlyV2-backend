"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "candidates",
      [
        {
          firstName: "David",
          tags: ["Bike", "Motor", "Scooter"],
          price: 2500,
          salary: 3500,
          description: "Is a good worker!",
          status: "Open",
          industry: "IT",
          hours: 40,
          educationLevel: 8,
          careerLevel: 7,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jeroen",
          tags: ["Computer", "Laptop", "TV"],
          price: 3400,
          salary: 9600,
          description: "Is amazing at technology!",
          status: "In Progress",
          industry: "Finance",
          hours: 36,
          educationLevel: 9,
          careerLevel: 10,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("candidates", null, {});
  },
};
