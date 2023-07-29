const { Sequelize } = require("sequelize");

const db = new Sequelize("english_in_eight", "root", "secret", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
