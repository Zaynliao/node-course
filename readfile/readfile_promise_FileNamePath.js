const fs = require('fs');


function getNameFile(FileName) {
    return p = new Promise((resolve, reject) => {
        fs.readFile(FileName, 'utf-8', (err, data) => {
            if (err) {
                // 錯誤了
                reject(err);
                // console.log('喔喔喔，發生錯誤了');
                // console.error(err);
            } else {
                resolve(data);
                // // 因為沒有 err，所以是正確的
                // console.log(data);
            }
        });
    });
}


getNameFile("test.txt").then(result => console.log(result)).catch(result => console.log("發生錯誤" + result));
getNameFile("test1111.txt").then(result => console.log(result)).catch(result => console.log("發生錯誤  => " + result))