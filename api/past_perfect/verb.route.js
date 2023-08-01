const express = require("express");
const router = express.Router();
const getVerbs = require("./verb.controller");

router.get("/", getVerbs);

module.exports = router;
