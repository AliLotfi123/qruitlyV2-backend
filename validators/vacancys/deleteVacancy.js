const { check } = require("express-validator");

exports.deleteVacancyValidator = [
  check("id").not().isEmpty().withMessage("id is required"),
];
