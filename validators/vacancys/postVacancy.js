const { check } = require("express-validator");

exports.postVacancyValidator = [
  check("vacancyName").not().isEmpty().withMessage("vacancyName is required"),
  check("tags").not().isEmpty().withMessage("tags is required"),
  check("price").not().isEmpty().withMessage("price is required"),
  check("salary").not().isEmpty().withMessage("salary is required"),
  check("description").not().isEmpty().withMessage("description is required"),
  check("industry").not().isEmpty().withMessage("industry is required"),
  check("status").not().isEmpty().withMessage("status is required"),
  check("hours").not().isEmpty().withMessage("hours is required"),
  check("educationLevel")
    .not()
    .isEmpty()
    .withMessage("educationLevel is required"),
  check("careerLevel").not().isEmpty().withMessage("careerLevel is required"),
  check("userId").not().isEmpty().withMessage("userId is required"),
];
