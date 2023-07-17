// this file holds some settings from json and that we are going to use promises and that
//sequelize will check the database table definitions and compare them to the model definitions
const config = require("config.json"); //
const sql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
  });
  db.verb = require("../verbs/verb.model")(sequelize);
  await sequelize.sync({ alter: true });
}
