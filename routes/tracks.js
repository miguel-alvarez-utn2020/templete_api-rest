const express = require("express");
const router = express.Router();
const { validationCreateItem, validationGetItem } = require('../validators/tracks');
const customHeader = require('../middlewere/customHeader')
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");


router.get("/", getItems);

router.post("/", validationCreateItem, createItem);

router.get("/:id", validationGetItem, getItem);

router.put("/:id", validationGetItem, validationCreateItem,  updateItem);

router.delete("/:id", validationGetItem, validationCreateItem, deleteItem);

module.exports = router;