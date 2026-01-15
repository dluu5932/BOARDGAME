const knex = require('knex');              // import hàm knex
const knexfile = require('../../knexfile'); // lấy config từ knexfile.js

// Khởi tạo instance Knex với config development
const db = knex(knexfile.development);

module.exports = db;
