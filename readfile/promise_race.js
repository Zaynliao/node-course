// const fs = require('fs/promises');

let doWork = function(name, timer, cb) {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`name : ${name},timer : ${timer}`), timer);
    })
}
const p1 = doWork("p1", 1000);
const p2 = doWork("p2", 2000);
const p3 = doWork("p3", 1000);

Promise.race([p1, p2, p3])
    .then(value => {
        console.log(value)
    })
    .catch(err => {
        console.log(err.message)
    })

// (async() => {
//     try {
//         let FileName = "test.txt";
//         let result = await fs.readFile(FileName, "utf-8");
//         console.log(result);
//         // console.log(result("test.txt"));
//     } catch (e) {
//         console.log(e);
//     }
// })();