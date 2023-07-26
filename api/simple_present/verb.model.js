//this is the first file I built and here we are defining our model verb data types and we are using sequelize so that the definitions are understood in the backend and the database

const { DataTypes } = require("sequelize");

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // name: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      positive: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // positiveShortForm: {
        //   type: DataTypes.STRING,
        //   allowNull: false, 
        // },
        negative: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        negativeShortForm: {
      type: DataTypes.STRING, 
      allowNull: false
    }
    
  };
  return sequelize.define("simple_present", attributes, {freezeTableName: true}); 
}

module.exports = model;