// read stock no from stock.txt
// npm i axios

const axios = require('axios');
const fs = require('fs');

// 輸入檔案名稱
function getFileName(FileName) {
    return p = new Promise((resolve, reject) => {
        fs.readFile(FileName, 'utf-8', (err, stockNo) => {
            if (err) {
                reject(err);
            } else {
                console.log('read stock no from file:', stockNo);
                // https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220301&stockNo=2330
                axios
                    .get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
                        params: {
                            // 設定 query string
                            response: 'json',
                            date: '20220301',
                            //讀個別檔案內容讀取股票代碼
                            stockNo: stockNo,
                        },
                    })
                    .then((response) => {
                        // response 物件
                        //成功回傳
                        resolve(response.data);
                        // console.log(response.data);
                    })
                    .catch((e) => {
                        //錯誤回傳
                        reject(e)
                            // console.error(e);
                    });
            }
        });
    });
}

(async() => {
    try {
        let getName = await getFileName("stock.txt");
        console.log(getName);
    } catch (e) {
        console.error(e);
    }
})();