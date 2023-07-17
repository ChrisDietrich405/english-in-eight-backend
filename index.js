/// add sequelize

const express = require("express");
const app = express();

const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "secret",
//   database: "english_in_eight",
// });

app.listen(process.env.port);
