const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    const data = ["hola", "mundo"];

    res.send({data});
})


module.exports = router;