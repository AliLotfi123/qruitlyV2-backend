const { check } = require("express-validator");

exports.updateCandidateValidator = [
  check("firstName").not().isEmpty().withMessage("firstName is required"),
  check("tags").not().isEmpty().withMessage("tags is required"),
  check("price").not().isEmpty().withMessage("price is required"),
  check("status").not().isEmpty().withMessage("status is required"),
  check("hours").not().isEmpty().withMessage("hours is required"),
  check("educationLevel")
    .not()
    .isEmpty()
    .withMessage("educationLevel is required"),
  check("careerLevel").not().isEmpty().withMessage("careerLevel is required"),
  check("userId").not().isEmpty().withMessage("userId is required"),
  check("id").not().isEmpty().withMessage("id is required"),
];
