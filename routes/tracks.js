const express = require("express");
const router = express.Router();
const { validationCreateItem } = require('../validators/tracks');
const customHeader = require('../middlewere/customHeader')
const { getItems, createItem } = require("../controllers/tracks");


router.get("/", getItems);

router.post("/", validationCreateItem, customHeader, createItem);




module.exports = router;