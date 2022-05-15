const axios = require("axios");
const fs = require("fs/promises");

async function getStockInformation(stockName, stockDate) {
    try {
        let url = "https://www.twse.com.tw/exchangeReport/STOCK_DAY"; //參考陳泓霖crawler3.js的宣告
        let stockNo = await fs.readFile(stockName, "utf-8");
        let response = await axios.get(url, {
            params: {
                response: "json",
                date: stockDate,
                stockNo: stockNo,
            },
        });
        console.log(`股票標題 ： ${response.data.title}`);
        console.log(`開盤日期 ： ${response.data.date}`);
    } catch (e) {
        console.error("資料獲取錯誤 : " + e);
    }
}

(async() => {
    try {
        // 呼叫名稱日期
        await getStockInformation("stock.txt", "20220301");
        await getStockInformation("stock.txt", "20220302");
        await getStockInformation("stock.txt", "20220303");
        await getStockInformation("stock.txt", "20220304");
    } catch (e) {
        console.error("資料獲取錯誤 : " + e);
    }
})();

// getStockValue("stock.txt", "20220301");
// getStockValue("stock.txt", "20220302");
// getStockValue("stock.txt", "20220303");
// 直接執行函式結果將會隨機產生 順序不定
// 股票標題： 111 年03月 2330 台積電 各日成交資訊
// 開盤日期： 20220302
// 股票標題： 111 年03月 2330 台積電 各日成交資訊
// 開盤日期： 20220301
// 股票標題： 111 年03月 2330 台積電 各日成交資訊
// 開盤日期： 20220303