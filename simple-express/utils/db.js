require('dotenv').config();
const mysql = require('mysql2');
// const axios = require('axios');

let pool = mysql
    .createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        // 限制
        connectionLimit: 10,
    })
    .promise();

module.exports = pool;
