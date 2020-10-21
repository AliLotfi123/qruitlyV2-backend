const { check } = require("express-validator");

exports.postMessageValidator = [
  check("subject").not().isEmpty().withMessage("name is required"),
  check("description").not().isEmpty().withMessage("address is required"),
  check("senderName").not().isEmpty().withMessage("zipcode is required"),
  check("senderCompany").not().isEmpty().withMessage("city is required"),
  check("receiverName").not().isEmpty().withMessage("country is required"),
  check("receiverCompany").not().isEmpty().withMessage("name is required"),
  check("candidateName").not().isEmpty().withMessage("name is required"),
  check("VacancyName").not().isEmpty().withMessage("name is required"),
  check("candidateId").not().isEmpty().withMessage("name is required"),
  check("vacancyId").not().isEmpty().withMessage("name is required"),
];
