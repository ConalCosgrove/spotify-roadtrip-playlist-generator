const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || "development";
const {username, password, database, dialect } = require('../config/config.json')[env];
const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect
});

module.exports = sequelize;