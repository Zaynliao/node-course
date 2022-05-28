const mysql = require('mysql2/promise');
const axios = require("axios");
require("dotenv").config();

(async() => {

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })

    let [data, filed] = await connection.execute('SELECT * FROM stocks');

    // console.log(data);

    let url = "https://www.twse.com.tw/exchangeReport/STOCK_DAY";

    let result = data.map(async(data, index) => {
        let response = await axios.get(url, {
            params: {
                response: "json",
                date: '20220301',
                stockNo: data.id,
            },
        });
        return response.data;
    })


    let resultPromise = await Promise.all(result);
    console.log(resultPromise);

    connection.end();

})();