const { check } = require("express-validator");

exports.postMessageValidator = [
  check("subject").not().isEmpty().withMessage("subject is required"),
  check("description").not().isEmpty().withMessage("description is required"),
  check("senderName").not().isEmpty().withMessage("senderName is required"),
  check("senderCompany")
    .not()
    .isEmpty()
    .withMessage("senderCompany is required"),
  check("receiverName").not().isEmpty().withMessage("receiverName is required"),
  check("receiverCompany")
    .not()
    .isEmpty()
    .withMessage("receiverCompany is required"),
  check("candidateName")
    .not()
    .isEmpty()
    .withMessage("candidateName is required"),
  check("VacancyName").not().isEmpty().withMessage("VacancyName is required"),
  check("candidateId").not().isEmpty().withMessage("candidateId is required"),
  check("vacancyId").not().isEmpty().withMessage("vacancyId is required"),
];
