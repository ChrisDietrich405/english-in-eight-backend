const { Sequelize } = require("sequelize");

const db = new Sequelize("english_in_eight", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
