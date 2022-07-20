const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validationRegister = [
  check("name").exists().notEmpty(),
  check("age").exists().notEmpty().isNumeric(),
  check("password").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validationLogin = [
  check("password").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validationRegister, validationLogin };
