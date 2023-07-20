// this file holds some settings from json and that we are going to use promises and that
//sequelize will check the database table definitions and compare them to the model definitions
const config = require("../../config.json"); //
const sql = require("mysql2/promise");
const { Sequelize } = require("sequelize"); //Sequelize is a model from sequelize to compare the db model with the backend model

module.exports = db = {}; // = {} this equals and curly brackets is assigned a empty field at first before
//the initializtion function executes

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
  //if there is no database use config database
  const sequelize = new Sequelize(database, user, password, {
    //database, user, password come from the backend
    //confirming for example that my id is an integer (because it is defined as an integer in the database)
    dialect: "mysql",
  });
  db.verb = require("../simple_present/verb.model")(sequelize);
  //the verb above is created now and after will be added to the empty brackets ( module exports = db = {}) ("../simple_present/verb.model")(sequelize); matching the definitions between the database and the backend
  await sequelize.sync({ alter: true });
  //this means that every time we use the sequelize it's a synchronous function
  //{alter: true}
}
