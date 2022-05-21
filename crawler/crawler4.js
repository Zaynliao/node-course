const mysql = require('mysql2/promise');

(async() => {

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: '',
        database: 'stock'
    })

    let [data, filed] = await connection.execute('SELECT * FROM stocks');
    console.log(data);

    connection.end();

})();