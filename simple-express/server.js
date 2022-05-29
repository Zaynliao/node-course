const { request, response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');
// const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
app.use(cors());

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

app.use(express.static(path.join(__dirname, 'assets')));
// console.log(__dirname, 'assets/images');

app.use((request, response, next) => {
    // console.log('中間件 A');
    next();
    // response.send('中間件 A');
});

app.use((request, response, next) => {
    // console.log('中間件 B');
    next();
    // response.send('中間件 B');
});

app.get('/', (request, response, next) => {
    const text = '首頁~Ya';
    console.log(text);
    response.send(text);
});

app.use((request, response, next) => {
    // console.log('中間件 C');
    next();
});

app.get('/about', (request, response, next) => {
    response.send('關於我們');
});
app.get('/product', (request, response, next) => {
    response.send('商品');
});

app.get('/error', (request, response, next) => {
    // throw '故意製造的錯誤';
    // throw new Error('錯誤物件');
    // res.send('error');
});

// stock
app.get('/stocks', async (request, response, next) => {
    let [data, fileds] = await pool.execute('SELECT * FROM `stocks`');
    response.json(data);
});

app.get('/stocks/:stockId', async (request, response, next) => {
    // /:stockId
    // request.params.stockId
    // console.log('get stocks by id' + request.params);

    // let [data, fileds] = await pool.execute('SELECT * FROM `stock_prices` WHERE stock_id = ? and date = ?', [
    //     request.params.stockId,
    //     '2022-05-20',
    // ]);

    // 取得目前第幾頁
    // 使用 || 取得預設值 undefined || 1 => 1
    let page = request.query.page || 1;
    console.log(page);

    // 計算總筆數
    let [allResult, fileds_allResult] = await pool.execute('SELECT * FROM `stock_prices` WHERE stock_id = ?', [
        request.params.stockId,
    ]);
    const total = allResult.length;

    const perPage = 5;
    const lastPage = Math.ceil(total / perPage);
    // console.log(lastPage);
    let offset = (page - 1) * perPage;
    // console.log(offset);

    let [data, fileds] = await pool.execute('SELECT * FROM `stock_prices` WHERE stock_id = ? limit ? offset ?', [
        request.params.stockId,
        perPage,
        offset,
    ]);

    response.json({
        pagenation: {},
        data: data,
    });

    // console.log('get stocks by id' + data);

    // if (data.length === 0) {
    //     // 404範例
    //     response.status(404).json(data);
    // } else {
    //     response.json(data);
    // }
});

app.use((request, response, next) => {
    console.log('404', request.path);
    request.status(404).send('404');
});

app.use((error, request, response, next) => {
    console.error('來自錯誤的四個參數', response.path, error);
    response.status(500).send('Server Error : 請洽系統管理員');
});

app.listen(3001, () => {
    console.log('server running at port 3001');
});
