const express = require("express");
const router = express.Router();
const uploadMiddlewere = require('../utils/handleStorage')
const { createItem } = require('../controllers/storage');


router.post("/", uploadMiddlewere.single("myfile"), createItem)

module.exports = router;