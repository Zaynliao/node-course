const express = require('express');

const router = express.Router();

const pool = require('../utils/db');
// stock

router.get('', async (request, response, next) => {
    let [data, fileds] = await pool.execute('SELECT * FROM `stocks`');
    response.json(data);
});

router.get('/:stockId', async (request, response, next) => {
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

    let [getData, fileds] = await pool.execute(
        'SELECT * FROM `stock_prices` WHERE stock_id = ? ORDER BY date DESC LIMIT ? OFFSET ? ',
        [request.params.stockId, perPage, offset]
    );

    response.json({
        pagenation: {
            lastPage: lastPage,
        },
        data: getData,
    });
});

module.exports = router;
