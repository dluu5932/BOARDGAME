// src/db/init.js
const knex = require('knex');
const config = require('../../knexfile'); // import file cấu hình knex

// Khởi tạo kết nối DB theo môi trường (development, production,...)
const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]);

module.exports = db;
