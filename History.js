const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class History extends Model {}

History.init({
    position: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'history',
})

module.exports = History;