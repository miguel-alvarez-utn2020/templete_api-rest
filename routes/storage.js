const express = require("express");
const router = express.Router();
const uploadMiddlewere = require('../utils/handleStorage')
const { validationGetItem } = require('../validators/storage');
const { createItem, getItems, getItem, deleteItem} = require('../controllers/storage');


router.post("/", uploadMiddlewere.single("myfile"), createItem)

router.get("/", getItems);

router.get("/:id", validationGetItem, getItem);

router.delete("/:id", validationGetItem, deleteItem);

module.exports = router;