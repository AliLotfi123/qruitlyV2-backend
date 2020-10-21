const { check } = require("express-validator");

exports.receivedMessagesValidator = [
  check("receiverCompany")
    .not()
    .isEmpty()
    .withMessage("receiverCompany is required"),
];
