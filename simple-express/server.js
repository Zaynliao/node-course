const express = require('express');

const app = express();
app.get('/', (require, response, next) => {
    response.send('首頁');
})
app.get('/about', (require, response, next) => {
    response.send('關於我們');
})

app.listen(3001, () => {

    console.log('server running at port 3001');

})