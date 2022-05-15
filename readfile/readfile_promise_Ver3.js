const fs = require('fs/promise');

fs.readFile("test.txt", "utf-8").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});