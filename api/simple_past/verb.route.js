const express = require("express");
const router = express.Router();
const getAll = require("./verb.controller");

router.get("/", getAll);

module.exports = router;