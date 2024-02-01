const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Store extends Model {}

Project.init(
    {
    id: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    storename: {
        type: DataTypes.STRING,
        allowNull: false,
     },
    chef_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    menu_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'menu',
            key: 'id',
        },
    },
    },
)

module.exports = Store;