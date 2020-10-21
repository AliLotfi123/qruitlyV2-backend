const { check } = require("express-validator");

exports.getVacancyValidator = [
  check("userId").not().isEmpty().withMessage("userId is required"),
];
