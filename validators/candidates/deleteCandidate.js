const { check } = require("express-validator");

exports.deleteCandidateValidator = [
  check("id").not().isEmpty().withMessage("id is required"),
];
