const config = require('../config/db');

const dataType = require('sequelize');
const sequelize = new dataType(
    config.DB, 
    config.USER, 
    config.PASSWORD, 
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.dialect
    }
);

const db = {};

db.dataType = dataType;
db.sequelize = sequelize;

db.user = require("./MusicMate.model")(sequelize, dataType);

module.exports = db;