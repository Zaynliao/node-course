const fs = require("fs/promises");


// fs.readFile("test.txt", "utf-8").then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

let p = async (FileName)=> {
    let stockNo = await fs.readFile(FileName, "utf-8");
    console.log(stockNo);
}; 

p("test.txt");


// console.log(p("test.txt"));
// const p =  () =>  {a = fs.readFile("test.txt", "utf-8");console.log(a);}

// console.log(p);
