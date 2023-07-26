/// add sequelize

const express = require("express");
const app = express();
const simplePresentRoute = require("./api/simple_present/verb.route");

// const db = require("./api/helpers/db");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.static("public"));
app.use("/verb", simplePresentRoute);

app.listen(process.env.port);
