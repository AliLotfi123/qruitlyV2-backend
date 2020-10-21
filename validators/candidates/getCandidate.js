const { check } = require("express-validator");

exports.getCandidateValidator = [
  check("userId").not().isEmpty().withMessage("userId is required"),
];
