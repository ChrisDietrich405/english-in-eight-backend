const db = require("./db");
const { DataTypes } = require("sequelize");

const verbModel = db.define(
  "past_perfect_progressive",
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
    positiveShortForm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

module.exports = verbModel;
