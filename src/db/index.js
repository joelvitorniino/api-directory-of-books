const { Sequelize } = require('sequelize');
const dbConfig = require('./config');
const Books = require('../model/Books');

const connection = new Sequelize(dbConfig);

Books.init(connection);

module.exports = connection;