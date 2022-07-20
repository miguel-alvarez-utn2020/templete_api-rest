const express = require("express");
const router = express.Router();
const { register, login } = require('../controllers/auth')


const { validationRegister, validationLogin } = require('../validators/auth');

//TODO login 
router.post('/login', validationLogin, login);

//TODO Register
router.post('/register', validationRegister, register);

module.exports = router;