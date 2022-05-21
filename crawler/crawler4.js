const mysql = require('mysql2/promise');
require("dotenv").config();

(async() => {

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: process.env.OPENWEATER_TOKEN,
        database: 'stock'
    })

    let [data, filed] = await connection.execute('SELECT * FROM stocks');
    console.log(data);

    connection.end();

})();