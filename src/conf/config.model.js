const { DataTypes, UUIDV4 } = require('sequelize');
const  { sequelize } = require('../database');

const Config = sequelize.define('Config', {
    id: {
        primaryKey: true,
        type: DataTypes.UUIDV4,
        defaultValue: UUIDV4
    },
    name: DataTypes.STRING,
    value: DataTypes.STRING
});
const syncAndInsert = async () => {
    await Config.sync();
    await Config.create({
        name: 'REST_AUTH_BYPASS_URL',
        value: '/users,/auth'
    });
}
syncAndInsert();
module.exports = { Config };