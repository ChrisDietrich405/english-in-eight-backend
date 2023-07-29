const db = require("./db");
const { DataTypes } = require("sequelize");
//with this connection we can define the tables of the database

const verbModel = db.define(
  "simple_present",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    positive: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    negative: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    negativeShortForm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

module.exports = verbModel;
