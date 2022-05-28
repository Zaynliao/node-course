const express = require('express');

const app = express();
app.get('/', (request, response, next) => {
    response.send('首頁');
})
app.get('/about', (request, response, next) => {
    response.send('關於我們');
})
app.get('/product', (request, response, next) => {
    response.send('商品');
})

app.listen(3001, () => {

    console.log('server running at port 3001');

})