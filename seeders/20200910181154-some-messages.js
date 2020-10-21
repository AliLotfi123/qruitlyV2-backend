"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "messages",
      [
        {
          subject: "Candidate",
          description: "How are you?",
          candidateId: 1,
          vacancyId: 2,
          senderName: "Rein",
          senderCompany: "Codaisseur",
          receiverName: "Ali",
          receiverCompany: "Randstad",
          candidateName: "David",
          VacancyName: "Developer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject: "Vacancy",
          description: "I'm Good",
          candidateId: 2,
          vacancyId: 1,
          senderName: "Ali",
          senderCompany: "Randstad",
          receiverName: "Rein",
          receiverCompany: "Codaisseur",
          candidateName: "Jeroen",
          VacancyName: "Developer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("messages", null, {});
  },
};
