const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const pool = require('./utils/db');
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view', path.join(__dirname), 'view');
app.set('view engine', 'pug');
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

// app.use((request, response, next) => {
//     // console.log('中間件 C');
//     next();
// });

app.get('/about', (request, response, next) => {
    response.send('關於我們');
});
app.get('/product', (request, response, next) => {
    response.send('商品');
});

// app.get('/error', (request, response, next) => {
//     // throw '故意製造的錯誤';
//     // throw new Error('錯誤物件');
//     // res.send('error');
// });

const StockRouter = require('./router/stockRouter');
app.use('/api/stocks', StockRouter);

const AuthRouter = require('./router/authRouter');
app.use('/api/auth', AuthRouter);

// console.log('get stocks by id' + data);

// if (data.length === 0) {
//     // 404範例
//     response.status(404).json(data);
// } else {
//     response.json(data);
// }

app.use((request, response, next) => {
    console.log('404', request.path);
    response.status(404).send('404');
});

app.use((error, request, response, next) => {
    console.error('來自錯誤的四個參數', response.path, error);
    response.status(500).send('Server Error : 請洽系統管理員');
});

app.listen(3001, () => {
    console.log('server running at port 3001');
});
