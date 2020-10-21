const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("name is required"),
  check("address").not().isEmpty().withMessage("address is required"),
  check("zipcode").not().isEmpty().withMessage("zipcode is required"),
  check("city").not().isEmpty().withMessage("city is required"),
  check("country").not().isEmpty().withMessage("country is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 charachters"),
];
