const { check } = require("express-validator");
const validateResults = require('../utils/handleValidator');

const validationGetItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
        return validateResults(req, res, next);
  }
]

module.exports = { validationGetItem };
