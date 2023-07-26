const { DataTypes } = require("sequelize")

function model(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        positive: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        negative: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        negativeShortForm: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    return sequelize.define("simple_past", attributes, {freezeTableName: true})
}

module.exports = model 