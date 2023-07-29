/// add sequelize

const express = require("express");
const app = express();
const simplePresentRoute = require("./api/simple_present/verb.route");
const simplePastRoute = require("./api/simple_past/verb.route");
const presentProgressiveRoute = require("./api/present_progressive/verb.route")
const presentPerfectRoute = require("./api/present_perfect/verb.route")

const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/simple-past", simplePastRoute);
app.use("/simple-present", simplePresentRoute);
app.use("/present-progressive", presentProgressiveRoute);
app.use("/present-perfect", presentPerfectRoute)

app.listen(process.env.port);
